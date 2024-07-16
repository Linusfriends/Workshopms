import express from "express" ;
import cors from 'cors'
import { adminRouter } from "../Server/Routes/AdminRoute.js"
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
const app=express()
app.use(cors({
    origin: ["http://localhost:5174"],
    methods: ['GET', 'POST', 'PUT','DELETE'],
    credentials: true 
}))
app.use(express.json())
app.use(cookieParser())
app.use('/auth',adminRouter)
app.use('/employee',EmployeeRouter)
app.use(express.static('Public'))

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
        jwt.verify(token,"jwt_secret_key", (err, decoded) =>{
            if (err) return res.json({Status: false, Error: "Wrong Token"})
            req.email = decoded.email;
            req.role = decoded.role;
            req.id = decoded.id;
            next()
        })

    } else 
    return res.json({Status: false, Error: "Not Aunthenticated"})

}

app.get('/verify', verifyUser, (req,res) => {
    return res.json({Status: true, role: req.role, id: req.id})
})
app.listen(3000,()=> {
    console.log("Server is Running...3000")
})