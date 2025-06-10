const JobModel = require("../model/job.model")
const jobModel = require("../model/job.model")

const createJob = async (req,res)=>{
    console.log(req.body);
    await  JobModel.create(req.body);
    res.json({
        success:"true",
        message:"create your job api"
    })
}

const listJob = async (req,res)=>{
    const jobs = await JobModel.find({
        
    })
    res.json({
        success:"true",
        message:"list your job api",
        results:jobs
    })
}

const editJob =  (req,res)=>{
    res.json({
        success:"true",
        message:"edit your job api"
    })
}

const deleteJob = (req,res)=>{
    res.json({
        success:"true",
        message:"delete your job api"
    })
}

const JobController = {
    createJob,
    listJob,
    editJob,
    deleteJob
}

module.exports = JobController;