/////////////////////////////////////////////////////////////////

const express = require ("express");
const mysql = require ("mysql2");
const cors = require ("cors");

const app = express();
app.use(express.json());
app.use (cors());


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Necefzade97)",
    database: "socialmedia",
  });

  /////////////////////////////////////////////////////////////////
  app.get("/", function (req, res) {    
    connection.query("select * from users", function (err, result, fields) {
      //   console.log(err);
        console.log(result);
      //   console.log(fields);
      res.send(result);
    });
  });
//////////////////////////////////////////////////////////////////
  app.get("/:id", (req, res) => {
    const elem = req.params;
    // sql id get method
    connection.query("select * from users", function (err, result, fields) {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
        if (elem.id == result[i].ID) {
          res.send(result[i]);
        }
      }
    });
  });
  ////////////////////////////////////////////////////////////////
  app.delete("/:id", (req, res) => {
    const elem = req.params.id;
    
    connection.query(
      `DELETE FROM users WHERE ID=${elem}`,
      function (err, result, fields) {
        console.log(result);
      }
    );
    axios.delete("http://localhost:3000/" )
  });
  ///////////////////////////////////////////////////////////////
  // post method
app.post("/", (req, res) => {
    let obj = req.body;

    connection.query(
      `INSERT INTO users (ID, AD, SOYAD, ADRESS, PAROL)
      VALUES ("${obj.ID}", "${obj.AD}", "${obj.SOYAD}", "${obj.ADRESS}", "${obj.PAROL}")`,
      function (err, result, fields) {
        //   console.log(result);
        //   app.get("/users", function (req, res) {
        //     res.send(result);
        //   });
      }
    );
    connection.query("select * from users", function (err, result, fields) {
      //   console.log(err);
      console.log(result);
      res.send(result);
    });
    axios.post("http://localhost:3000/")
  });

  app.listen (3000)