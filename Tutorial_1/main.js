console.log("!! Welcome to Adv. Node js Tutorial_1 !!");

/** 
 * Creating a server and printing Hello World on Browser using express js
 */

/** =========================== Example : Start ========================= */
const express = require("express");
const app = express();

const port = 3000;
var msg_data = "!! Hello World !!";


app.get("/",(req,res)=>{
    res.send(msg_data);
});
app.listen(port,()=>{
    console.log(`Server Running at port : ${port}\n`);
})

/** =========================== Example : END ========================= */