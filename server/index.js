const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');
const express = require("express");
const app =express();
const pool =require('./db');

const typeDefs = gql`
  type Employee {
   
    emp_id: Int!
    name : String
    salary: Int
 
  }

  type Query {
    getAllEmployees: [Employee]
    getEmployeeById(emp_id: Int): Employee
  }

  type Mutation {
    createEmployee(name: String, salary: Int, emp_id: Int!): Employee
    updateEmployee( name: String, salary: Int emp_id: Int!): Employee
    deleteEmployee(emp_id: Int): Boolean
  }
`;

const resolvers = {
  Query: {
    getAllEmployees: async () => {
      const { rows } = await pool.query('SELECT * FROM emp');
      return rows ;
    },
    getEmployeeById: async (_, { emp_id }) => {
      const { rows } = await pool.query('SELECT * FROM emp WHERE emp_id = $1', [emp_id]);
     console.log("hello o", rows);
      return rows[0];
    },
  },
  Mutation: {
    createEmployee: async (_, { name, salary, emp_id}) => {
      const { rows } = await pool.query('INSERT INTO emp (name, salary, emp_id) VALUES ($1, $2, $3) RETURNING *', [name, salary, emp_id]);
      return rows[0];
    },
    updateEmployee: async (_, {  name, salary, emp_id }) => {
      const { rows } = await pool.query('UPDATE emp SET name = $1, salary= $2 WHERE emp_id = $3 RETURNING *', [name, salary, emp_id]);
      return rows[0];
    },
    deleteEmployee: async (_, { emp_id }) => {
      await pool.query('DELETE FROM emp WHERE emp_id = $1', [emp_id]);
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
