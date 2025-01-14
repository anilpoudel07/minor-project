import {  express} from "express";
const app  = express()
app.json({limit:"100kb"})
app.urlencoded({extended:true})
app.static('public')
