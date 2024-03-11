var data = require('./db.json');

const path = require('path');
const express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  console.log(data);
  res.send(data);
})

// app.get("/api/tasks", (req, res) => {
//   res.send(data.tasks);
// });

// app.get("/api/tasks/:id", (req, res) => {
//   for (let i = 0; i < data.tasks.length; i++) {
//     if (data.tasks[i].id == req.params.id) {
//       console.log(data.tasks[i]);
//       res.send(data.tasks[i]);
//       return;
//     }
//   }
//   console.log("NAH");
//   res.sendStatus(404);
// })

// app.post("/api/tasks", (req, res) => {
//   response = {
//     id: req.body.id,
//     task: req.body.task,
//     completed: req.body.completed
//   }

//   data.tasks.push(response);
//   fs.writeFileSync("./server/db.json", JSON.stringify(data));

//   console.log(response);
//   res.send(JSON.stringify(response));
// });

// app.put("/api/tasks/:id", (req, res) => {
//   for (let i = 0; i < data.tasks.length; i++) {
//     if (data.tasks[i].id == req.params.id) {
//       data.tasks[i].completed = req.body.completed;
//       fs.writeFileSync("./server/db.json", JSON.stringify(data));

//       console.log(data.tasks[i]);
//       res.send(data.tasks[i]);
//       return;
//     }
//   }
//   console.log("404");
//   res.sendStatus(404);
// });

// app.delete("/api/tasks/:id", (req, res) => {
//   for (let i = 0; i < data.tasks.length; i++) {
//     if (data.tasks[i].id == req.params.id) {
//       data.tasks.splice(i, 1);
//       fs.writeFileSync("./server/db.json", JSON.stringify(data));

//       console.log(data.tasks);
//       res.send(data.tasks);
//       return;
//     }
//   }
//   console.log("404");
//   res.sendStatus(404);
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
