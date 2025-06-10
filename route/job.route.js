const express = require("express");

const router = express.Router();

const JobController = require("../controller/job.controller")


// Add proper handler functions to each route
router.post("/create-job", JobController.createJob);

router.get("/list-job", JobController.listJob);

router.patch("/edit-job", JobController.editJob);

router.delete("/delete-job", JobController.deleteJob);


module.exports = router;