module.exports = app => { 

     const phonesRouter = require("./phones.routes")
    app.use("/api/phones", phonesRouter)
}