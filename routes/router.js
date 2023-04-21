const express=require('express');
const Index=require('../models/index');
const bcrypt=require('bcrypt');
const router=express.Router();

router.get('/signup',(req,res)=>{
    res.render('signup');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.get('/home',(req,res)=>{
    res.render('home');
})


router.post('/ad', (req, res,next) => {
    var index = new Index(req.body);

    res.redirect('home');
  
    index.save()
      .then(() => {
        res.send('Your message has been saved to the database.');
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error saving message to database.');
      });
  });


  router.post('/adlogin', async (req, res,next) => {
    try{
        const chech=await Index.findOne({name:req.body.name})
        if(chech.password === req.body.password){
            res.render('home')
        }else{
            res.send('wrong password')
        }
    }catch{
        res.send('wrong password')
    }
  });

  


module.exports=router;