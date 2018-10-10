var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
	app.get('/api/projects/:id', (req, res) => {
		const id = req.params.id;
    const details = { '_id': new ObjectID(id)};
    db.collection('projects').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

	app.post('/api/projects', (req, res) => {
    // You'll create your project here.
    const project = { text: req.body.body, title: req.body.title };
    db.collection('projects').insert(project, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.get('/api/projects', (req, res) => {
    // You'll create your project here.
    db.collection('projects').find({}).toArray((err, results) => {
      if (err) { 
      	console.log(err)
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(results);
      }
    });
  });

	app.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('projects').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

  app.put('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const project = { text: req.body.body, title: req.body.title };
    db.collection('projects').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(project);
      } 
    });
  });

};