const { getAllPhones, getPhoneById } = require("../controllers/phones.controller")

const router = require("express").Router()



router.get("/", getAllPhones)

router.get("/:id", getPhoneById)



module.exports = router
