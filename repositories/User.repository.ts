import {Connection} from "mysql2/promise"
import UserCreationDto from "../dto/user/IUserCreation.dto"
import IUserUpdateDto from "../dto/user/IUserUpdate.dto"
import prepareUpdateRows from "../utils/prepareUpdateRows"
import IUserDto from "../dto/user/IUser.dto"
import username from "../utils/data_objects/user/Username"
import Id from "../utils/data_objects/user/Id"

class UserRepository {
    private _database: Connection

    constructor(database: Connection) {
        this._database = database
    }

    public async create({ email, password, username }: UserCreationDto): Promise<void> {
        await this._database.execute(
            "INSERT INTO user(email, password, username) VALUES (?,?,?)",
            [email.get(), password.get(), username.get()]
        )
    }

    public async update({ username, password, email, id }: IUserUpdateDto): Promise<any> {
        await this._validateUserExisting(id)
        const [updateLine, params] = prepareUpdateRows(
            ["username", "password", "email"],
            {username: username.get(), password: password.get(), email: email.get()}
        )
        await this._database.execute(
            `UPDATE user SET ${updateLine} WHERE id = ?`,
            [...params, id.get()]
        )
    }

    public async getById(id: Id) : Promise<IUserDto> {
        await this._validateUserExisting(id)
        const [row] = await this._database.execute("SELECT * FROM user WHERE id = ?", [id.get()])
        return row[0]
    }

    public async delete(id: Id): Promise<void> {
        await this._validateUserExisting(id)
        await this._database.execute("DELETE FROM user WHERE id = ?", [id.get()])
    }

    public async isExists(id: Id): Promise<boolean> {
        const [row] = await this._database.execute("SELECT COUNT(*) = 1 as isExists FROM user WHERE id = ?", [id.get()])
        return row[0]["isExists"]
    }

    private async _validateUserExisting(id: Id) : Promise<void> {
        if(!await this.isExists(id)) throw new Error("No user with this id")
    }
}

export default UserRepository