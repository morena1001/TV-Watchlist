var data = require('./db.json');

const path = require('path');
const express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/shows", (req, res) => {
  let status = req.query.status;
  let favorite = req.query.favorite;
  let search = req.query.search;

  if (search != undefined && search != "") {
    search = search.replaceAll("%20", " ");
    console.log(data.shows.filter((show) => show.title.toLowerCase().includes(search)));
    res.send(data.shows.filter((show) => show.title.toLowerCase().includes(search)));
    return;
  }
  
  if (status == undefined || status == "") {
    if (favorite == undefined || favorite == "") {
      console.log(data.shows);
      res.send(data.shows);
      return;
    }
    else if (favorite == "no") {
      console.log(data.shows.filter((show) => show.favorite == "no"));
      res.send(data.shows.filter((show) => show.favorite == "no"));
      return;
    }
    else if (favorite == "yes") {
      console.log(data.shows.filter((show) => show.favorite == "yes"));
      res.send(data.shows.filter((show) => show.favorite == "yes"));
      return;
    }
  }
  else if (status == "current") {
    let day = req.query.day;

    switch (day) {
      case undefined: 
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current")));
          res.send(data.shows.filter((show) => show.status.includes("current")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current") && show.favorite == "yes"));
          return;
        }
        break;

      case "":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current")));
          res.send(data.shows.filter((show) => show.status.includes("current")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current") && show.favorite == "yes"));
          return;
        }
        break;

      case "sunday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current sunday")));
          res.send(data.shows.filter((show) => show.status.includes("current sunday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current sunday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current sunday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current sunday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current sunday") && show.favorite == "yes"));
          return;
        }
        break;

      case "monday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current monday")));
          res.send(data.shows.filter((show) => show.status.includes("current monday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current monday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current monday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current monday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current monday") && show.favorite == "yes"));
          return;
        }
        break;

      case "tuesday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current tuesday")));
          res.send(data.shows.filter((show) => show.status.includes("current tuesday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current tuesday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current tuesday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current tuesday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current tuesday") && show.favorite == "yes"));
          return;
        }
        break;

      case "wednesday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current wednesday")));
          res.send(data.shows.filter((show) => show.status.includes("current wednesday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current wednesday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current wednesday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current wednesday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current wednesday") && show.favorite == "yes"));
          return;
        }
        break;

      case "thursday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current thursday")));
          res.send(data.shows.filter((show) => show.status.includes("current thursday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current thursday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current thursday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current thursday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current thursday") && show.favorite == "yes"));
          return;
        }
        break;

      case "friday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current friday")));
          res.send(data.shows.filter((show) => show.status.includes("current friday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current friday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current friday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current friday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current friday") && show.favorite == "yes"));
          return;
        }
        break;

      case "saturday":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current saturday")));
          res.send(data.shows.filter((show) => show.status.includes("current saturday")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current saturday") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current saturday") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current saturday") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current saturday") && show.favorite == "yes"));
          return;
        }
        break;

      case "other":
        if (favorite == undefined || favorite == "") {
          console.log(data.shows.filter((show) => show.status.includes("current other")));
          res.send(data.shows.filter((show) => show.status.includes("current other")));
          return;
        }
        else if (favorite == "no") {
          console.log(data.shows.filter((show) => show.status.includes("current other") && show.favorite == "no"));
          res.send(data.shows.filter((show) => show.status.includes("current other") && show.favorite == "no"));
          return;
        }
        else if (favorite == "yes") {
          console.log(data.shows.filter((show) => show.status.includes("current other") && show.favorite == "yes"));
          res.send(data.shows.filter((show) => show.status.includes("current other") && show.favorite == "yes"));
          return;
        }
        break;
    }
  }
  else if (status == "watchlist") {
    if (favorite == undefined || favorite == "") {
      console.log(data.shows.filter((show) => show.status.includes("watchlist")));
      res.send(data.shows.filter((show) => show.status.includes("watchlist")));
      return;
    }
    else if (favorite == "no") {
      console.log(data.shows.filter((show) => show.status.includes("watchlist") && show.favorite == "no"));
      res.send(data.shows.filter((show) => show.status.includes("watchlist") && show.favorite == "no"));
      return;
    }
    else if (favorite == "yes") {
      console.log(data.shows.filter((show) => show.status.includes("watchlist") && show.favorite == "yes"));
      res.send(data.shows.filter((show) => show.status.includes("watchlist") && show.favorite == "yes"));
      return;
    }
  }
  else if (status == "stopped") {
    if (favorite == undefined || favorite == "") {
      console.log(data.shows.filter((show) => show.status.includes("stopped")));
      res.send(data.shows.filter((show) => show.status.includes("stopped")));
      return;
    }
    else if (favorite == "no") {
      console.log(data.shows.filter((show) => show.status.includes("stopped") && show.favorite == "no"));
      res.send(data.shows.filter((show) => show.status.includes("stopped") && show.favorite == "no"));
      return;
    }
    else if (favorite == "yes") {
      console.log(data.shows.filter((show) => show.status.includes("stopped") && show.favorite == "yes"));
      res.send(data.shows.filter((show) => show.status.includes("stopped") && show.favorite == "yes"));
      return;
    }
  }
  else if (status == "finished") {
    if (favorite == undefined || favorite == "") {
      console.log(data.shows.filter((show) => show.status.includes("finished")));
      res.send(data.shows.filter((show) => show.status.includes("finished")));
      return;
    }
    else if (favorite == "no") {
      console.log(data.shows.filter((show) => show.status.includes("finished") && show.favorite == "no"));
      res.send(data.shows.filter((show) => show.status.includes("finished") && show.favorite == "no"));
      return;
    }
    else if (favorite == "yes") {
      console.log(data.shows.filter((show) => show.status.includes("finished") && show.favorite == "yes"));
      res.send(data.shows.filter((show) => show.status.includes("finished") && show.favorite == "yes"));
      return;
    }
  }

  console.log(404);
  res.sendStatus(404);
});

app.get("/shows/:id", (req, res) => {
  console.log(data.shows.filter((show) => show.id == req.params.id));
  res.send(data.shows.filter((show) => show.id == req.params.id));
});

app.post("/shows", (req, res) => {
  response = {
    id: req.body.id,
    title: req.body.title,
    status: req.body.status,
    favorite: req.body.favorite
  }

  data.shows.push(response);
  fs.writeFileSync("./server/db.json", JSON.stringify(data));

  console.log(response);
  res.send(JSON.stringify(response));
});

app.put("/shows/:id", (req, res) => {
  for (let i = 0; i < data.shows.length; i++) {
    if (data.shows[i].id == req.body.id) {
      data.shows[i].title = req.body.title;
      data.shows[i].status = req.body.status;
      data.shows[i].favorite = req.body.favorite;
      fs.writeFileSync("./server/db.json", JSON.stringify(data));

      console.log(data.shows[i]);
      res.send(data.shows[i]);
      return;
    }
  }
  console.log("404");
  res.sendStatus(404);
});

app.delete("/shows/:id", (req, res) => {
  // let show = data.shows.filter((show) => show.id == req.params.id);
  for (let i = 0; i < data.shows.length; i++) {
    if (data.shows[i].id == req.params.id) {
      data.shows.splice(i, 1);
      fs.writeFileSync("./server/db.json", JSON.stringify(data));

      console.log(data.shows);
      res.send(data.shows);
      return;
    }
  }
  console.log("404");
  res.sendStatus(404); 
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
