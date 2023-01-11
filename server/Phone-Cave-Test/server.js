const express = require("express")


const app = require("./app")

const PORT = process.env.PORT || 5005

app.use('/static', express.static('public'))


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
