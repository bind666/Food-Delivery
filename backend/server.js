import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


//app config
const app = express()
const port = process.env.PORT || 4000;


//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

app.get("/", (req, res) => {
    res.send("API working")
})

//api endpoint
app.use("/api/v1/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/v1/user", userRouter)
app.use("/api/v1/cart", cartRouter)
app.use("/api/v1/order", orderRouter)


app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
})

//mongodb+srv://sachinbind9891:646800@cluster0.mupvmoa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
