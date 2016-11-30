var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('edu', ['edu']);
var db2 = mongojs('skill', ['skill']);
var db3 = mongojs('project', ['project']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/edu', function (req, res) {
  console.log('I received a GET request');

  db.edu.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

  app.post('/edu', function (req, res) {
    console.log(req.body);
    db.edu.insert(req.body, function(err, doc) {
      res.json(doc);
  });
});

app.delete('/edu/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.edu.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/edu/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.edu.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/edu/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.school);
  db.edu.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {school: req.body.school, degree: req.body.degree, last_year: req.body.last_year}},
    new: true}, function (err, doc) {
      res.json(doc);
    });
});

//end of edu db

app.get('/skill', function (req, res) {
  console.log('I received a GET request');

  db2.skill.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

  app.post('/skill', function (req, res) {
    console.log(req.body);
    db2.skill.insert(req.body, function(err, doc) {
      res.json(doc);
  });
});

app.delete('/skill/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db2.skill.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/skill/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db2.skill.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/skill/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.skill);
  db2.skill.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {skill: req.body.skill}},
    new: true}, function (err, doc) {
      res.json(doc);
    });
});

//end of skill db

app.get('/project', function (req, res) {
  console.log('I received a GET request');

  db3.project.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

  app.post('/project', function (req, res) {
    console.log(req.body);
    db3.project.insert(req.body, function(err, doc) {
      res.json(doc);
  });
});

app.delete('/project/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db3.project.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/project/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db3.project.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/project/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.school);
  db3.project.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {title: req.body.title, description: req.body.description}},
    new: true}, function (err, doc) {
      res.json(doc);
    });
});

app.listen(8080);
console.log("Server running on port 8080");
