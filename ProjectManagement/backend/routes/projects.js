const express = require('express');
const Projects = require('../model/projects');
var multer = require('multer')
var uniqid = require('uniqid')


const router = express.Router();

//save project
router.post('/project/save',(req,res) => {
    let newProject = new Projects(req.body);

    newProject.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Project saved successful"
        });
    });

});


// get Project
router.get('/projects',(req,res) =>{
    Projects.find().exec((err,projects) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProjects:projects
        });
    });
});



//get a specific Project
router.get("/project/:id",(req,res)=>{
    let projectId = req.params.id;
    Projects.findById(projectId,(err,project)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            project
        });
    });
});



//update project
router.put('/project/update/:id',(req,res)=>{
    Projects.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,project)=>{
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }
                return res.status(200).json({
                    success:"updated successfully"
                });
            }
    );
});


//delete project
router.delete('/project/delete/:id',(req,res) =>{
    Projects.findByIdAndRemove(req.params.id).exec((err,deletedProject) =>{
        if(err) return res.status(400).json({
                message:"delete unsuccesful",err
        });
        return res.json({
            success:"delete successfully",deletedProject
        });
    });
});




module.exports = router;