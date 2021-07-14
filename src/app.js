const express = require("express");
const path = require("path");
const app = express();

require("./db/conn");
const Register = require("./models/registers")

const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path))

app.get("/" ,(req,res) => {
    res.status(201).render("index.html");
})

app.post("/register", async (req , res) => {
    try{
        const registerUser = await new Register({
            name: req.body.name,
            subject: req.body.subject,
            phone: req.body.phone,
            email: req.body.email,
            message: req.body.message,   
        })
        const registered = await registerUser.save();
        res.status(201).redirect("/");
    } 
    catch (error) { 
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
})
