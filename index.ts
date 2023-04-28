import * as express from "express"
import * as bodyParser from "body-parser"
import userRouter from "./routers/user.router"

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(userRouter)

app.listen(3000)