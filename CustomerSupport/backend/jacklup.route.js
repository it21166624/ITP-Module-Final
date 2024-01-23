const express = require('express');
const jacklupRouteRoutes = express.Router();

let FeedBacks = require('./feedback.model');
let Chats = require('./chat.model');
let Rates = require('./rate.model');

jacklupRouteRoutes.route('/addfeedback').post(function (req,res){
    let feedBacks = new FeedBacks(req.body);
    feedBacks.save()
        .then(feedBacks => {
            res.status(200).json({'feedBack' : 'feedBack is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

jacklupRouteRoutes.route('/feedback').get(function (req, res){
    
    FeedBacks.find(function (err,feed){
        if(err)
            console.log(err);
        else{
            res.json(feed)
        }
    });

});

jacklupRouteRoutes.route('/editfeedback/:id').get(function (req,res){
    let id = req.params.id;
    FeedBacks.findById(id, function (err,feed){
        res.json(feed);
    });
});

jacklupRouteRoutes.route('/updatefeedback/:id').post(function (req,res){
    let id = req.params.id;
    FeedBacks.findById(id, function (err, feed){
        if(!feed)
            res.status(404).send("Data is not found??");
        else{
            feed.type = req.body.type;
            feed.email = req.body.email;
            feed.message = req.body.message;


            feed.save().then(feed => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

jacklupRouteRoutes.route('/admindeletefeedback/:id').get(function(req,res){
    FeedBacks.findByIdAndRemove({_id:req.params.id}, function (err, feed){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

jacklupRouteRoutes.route('/searchfeedback/:id').get(function (req, res){
    let id = req.params.id;
    console.log("Search Key : "+id);
    FeedBacks.findOne({$or:[{email : id},{type : id}]},function (err,feed){
        if(err)
            console.log(err);
        else{
            res.json(feed)
        }
    });

});

jacklupRouteRoutes.route('/addchat').post(function (req,res){
    let chats = new Chats(req.body);
    chats.save()
        .then(chats => {
            res.status(200).json({'chat' : 'chats is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

jacklupRouteRoutes.route('/chat').get(function (req, res){
    console.log("get chat called")
    Chats.find(function (err,chat){
        if(err)
            console.log(err);
        else{
            res.json(chat)
        }
    });

});

jacklupRouteRoutes.route('/rate/:id').get(function (req, res){
    let id = req.params.id;
    console.log("Get Rating Called..." +id);
    Rates.findById(id, function (err,rates){
        res.json(rates);
    });
});

jacklupRouteRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Update Rating Called..." +id);
    Rates.findById(id, function (err, rates){
        if(!rates)
            res.status(404).send("Data is not found??");
        else{
            rates.one = req.body.one;
            rates.two = req.body.two;
            rates.three = req.body.three;
            rates.four = req.body.four;
            rates.five = req.body.five;
            rates.total = req.body.total;
            rates.average = req.body.average;

            rates.save().then(rates => {
                res.json('Update Complete');
            })
            .catch(err =>{
                res.status(400).send("Unable to update data");
            });
        }
    });
});



module.exports = jacklupRouteRoutes;