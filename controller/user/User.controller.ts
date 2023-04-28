import * as express from "express";
import IUserRepository from "./interfaces/IUserRepository"
import Username from "../../utils/data_objects/user/Username"
import Email from "../../utils/data_objects/Email"
import Password from "../../utils/data_objects/user/Password"
import Id from "../../utils/data_objects/user/Id"

class UserController {
    private _repository: IUserRepository

    public constructor(repository: IUserRepository) {
        this._repository = repository
    }

    public async getById(req: express.Request, res: express.Response): Promise<void> {
        try {
            const user = await this._repository.getById(new Id(req.params.id))
            res.status(200).send(JSON.stringify(user))
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }

    public async create(req: express.Request, res: express.Response): Promise<void> {
        const data = req.body
        try {
            await this._repository.create({
                username: new Username(data.username),
                email: new Email(data.email),
                password: new Password(data.password)
            })
        } catch(error) {
            res.status(400).send(error.toString())
            return
        }
        res.status(200).send("User created")
    }

    public async update(req: express.Request, res: express.Response): Promise<void> {
        const data = req.body
        try {
            const updateData = {}
            if(data.username !== undefined) updateData["username"] = new Username(data.username)
            if(data.email !== undefined) updateData["email"] = new Email(data.email)
            if(data.password !== undefined) updateData["password"] = new Password(data.password)
            await this._repository.update({...updateData, id: new Id(data.id)})
            res.status(200).send("User updated")
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }

    public async delete(req: express.Request, res: express.Response): Promise<void> {
        try {
            await this._repository.delete(new Id(req.params.id))
            res.status(200).send("User deleted")
        } catch(error) {
            res.status(400).send(error.toString())
        }
    }
}

export default UserController