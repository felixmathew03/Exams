import express from 'express'
import env from 'dotenv'
import connection from './connection.js';
import router from './router.js';

env.config();
const app=express();
app.use(express.static("../frontend"));
app.use(express.json({limit:'50mb'}));
app.use('/api',router);

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server started at http://localhost:${process.env.PORT}`);
        
    })
}).catch((error)=>{
    console.log("error");
})
