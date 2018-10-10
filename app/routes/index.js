const projectRoutes = require('./project_routes');
const notesRoutes = require('./note_routes');
module.exports = function(app, db) {
  projectRoutes(app, db);
  notesRoutes(app, db);
  // Other route groups could go here, in the future
};