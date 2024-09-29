const path = require('path');
const express = require('express');
const bodyparser = require('body-parser')
const rootDir=require('./utils/path')
const adminRoutes=require('./routes/admin');
const homeRoutes=require('./routes/home');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
//static files
app.use(express.static(path.join(rootDir,'public')));
app.use('/css', express.static(path.join(rootDir,'node_modules','bootstrap','dist','css')));
app.use(bodyparser.urlencoded({extended:false}));
//routes
app.use(homeRoutes);
app.use("/products",adminRoutes);
app.use((req, res)=>{
    const viewsData = {
        pageTitle:"Page Not Found"
    }
    res.status(404).render('404',viewsData);
})
//server
app.listen(3000,()=>{
    console.log('Server is listening at port 3000')
});