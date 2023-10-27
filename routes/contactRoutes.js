const express = require('express');
const router = express.Router();

const {
    getContacts,
    createContacts,
    updateContacts,
    deleteContacts,
    searchContacts
} = require("../controllers/contactController")

// router.route("/").get((req,res)=>
// {
//   res.status(200).send("To get all the Contacts")
// })

// router.route("/").post((req,res)=>
// {
//   res.status(200).send("Create Contacts")
// })

// router.route("/:id").put((req,res)=>
// {
//   res.status(200).send(`update contact for ${req.params.id}`)
// })

// router.route("/:id").delete((req,res)=>
// {
//   res.status(200).send(` contact for ${req.params.id}`)
// })

// 


// router.route("/").get(getContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);



router.get("/getContacts", getContacts);
router.post("/addContacts", createContacts);
router.put("/updateContacts/:id", updateContacts);
router.delete("/deleteContacts/:id", deleteContacts);
router.get("/searchContacts/:id", searchContacts);

// router.route("/").get(getContacts).post(createContact);

// router.route("/:id").put(updateContact).delete(deleteContact).search(searchContact);



module.exports = router;