// const express = require('express');
// const app = express();
// const cors = require("cors");

// const pool = require("./db");



// // middleware
// app.use(cors());
// app.use(express.json());


// // rottes

// // ceate a employee table
// app.post("/emp", async (req, res) => {
//     try {

//         const { emp_id, name, salary } = req.body;
        
//             const newEmp = await pool.query("INSERT INTO emp (emp_id, name ,salary ) VALUES($1 ,$2,$3)   RETURNING *",
//             [emp_id, name, salary]


//         );
       
//         res.json(newEmp.rows[0]);

//     } catch (err) {
//         console.error(err.message);
//         res.json("plese kindely check the data");
//     }
// });





// //  get all emp

// app.get("/emp", async (req, res) => {

//     try {

//         const allEmp = await pool.query("SELECT * FROM emp");
//         res.json(allEmp.rows)

//     } catch (err) {

//         console.error(err.message);
//         res.json("plese kindely check the data");
//     }


// });


// // get a spcific emp
// app.get("/emp/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const emp = await pool.query("SELECT * FROM emp WHERE emp_id = $1 ", [id]);

//         res.json(emp.rows[0]);

//     } catch (err) {
//         console.error(err.message);
//         res.json("plese kindely check the data");

//     }
// });


// // update infermation in emp
// app.put("/emp/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name } = req.body;
//         const { salary } = req.body;
//         const updateemp = await pool.query("UPDATE emp  SET name = $1 , salary =$3 WHERE emp_id = $2 ", [name, id, salary]);
//         res.json("employe table was updated");

//     } catch (error) {
//         console.error(err.message);
//         res.json("plese kindely check the data");
//     }

// });


// // app.delete a emp

// app.delete("/emp/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteEmp = pool.query("DELETE FROM emp WHERE emp_id =$1 ", [id]);

//         res.json("employedata succesfully deleted");

//     } catch (error) {
//         console.log(err.message);
//     }
// });


// app.put ("/emp/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name,salary} = req.body;
//         const update= pool.query("UPDATE FROM emp SET name = $2 salary =$3 WHERE  emp_id =$1 ", [id, name, salary ]);

//         res.json("employedata succesfully updated");

//     } catch (error) {
//         console.log(err.message);
//     }
// });


// app.listen(5000, () => {
//     console.log("server is running on port  5000");
// });


