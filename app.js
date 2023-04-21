const express=require('express');
const Index=require('./models/index');
const mongoose=require('mongoose');
const path=require('path');
const app=express();

mongoose.connect('mongodb+srv://mondi123:mon@cluster0.5ewlcnc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology:true})

  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });


const PORT=process.env.PORT||3000;

app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const routerapp=require('./routes/router');
app.use(routerapp);

app.listen(PORT,()=>{
    console.log('port is',PORT);
});
