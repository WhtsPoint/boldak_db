import { Router } from "express"
import UserContainer from "../containers/User.container"

const container = new UserContainer()
const getController = async () => await container.getController()

const userRouter = Router()

userRouter.get("/api/user/:id", async (req, res) => {
    await (await getController()).getById(req, res)
})

userRouter.post("/api/user", async (req, res) => {
    await (await getController()).create(req, res)
})

userRouter.put("/api/user", async (req, res) => {
    await (await getController()).update(req, res)
})

userRouter.delete("/api/user/:id", async (req, res) => {
    await (await getController()).delete(req, res)
})


export default userRouter