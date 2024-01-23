const express = require('express');
const Offers = require('../model/offers');
var multer = require('multer')
var uniqid = require('uniqid')


const router = express.Router();

//save Offer
router.post('/offer/save',(req,res) => {
    let newOffer = new Offers(req.body);

    newOffer.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Offer saved successful"
        });
    });

});


// get Offer
router.get('/offers',(req,res) =>{
    Offers.find().exec((err,offers) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingOffers:offers
        });
    });
});



//get a specific Offer
router.get("/offer/:id",(req,res)=>{
    let offerId = req.params.id;
    Offers.findById(offerId,(err,offer)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            offer
        });
    });
});



//update Offer
router.put('/offer/update/:id',(req,res)=>{
    Offers.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,offer)=>{
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


//delete Offer
router.delete('/offer/delete/:id',(req,res) =>{
    Offers.findByIdAndRemove(req.params.id).exec((err,deletedOffer) =>{
        if(err) return res.status(400).json({
                message:"delete unsuccesful",err
        });
        return res.json({
            success:"delete successfully",deletedOffer
        });
    });
});









module.exports = router;