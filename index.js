const express = require("express");
const mongoose = require("mongoose");
const JobRoutes =   require("./route/job.route")
const app = express();

app.use(express.json());


mongoose
.connect("mongodb://127.0.0.1:27017/jobapp")
.then(()=>console.log(`Db connected successfully`))
.catch((err)=>console.log(`Error connecting db`, err))


app.use("/api/v/job",JobRoutes);

const portNo= 8080 
app.listen(portNo, ()=>console.log(`Your server is running on ${portNo}`)
);