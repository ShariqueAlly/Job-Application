const mongoose = require("mongoose");
const JobSchema = mongoose.Schema({
    title:{
        type:String
    },
    
    location:{
        type:String
    },

    salary:{
        type:Number
    }
,
    company:{
        type:String
    }
,
    skills:{
        type:[String]
    }
})

const JobModel= mongoose.model("Jobs",JobSchema);
module.exports = JobModel