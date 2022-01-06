const noteRouter = require('./note');
module.exports = (app) => {
    app.use("/api/v1/note", noteRouter);
}