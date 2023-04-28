import UserRepository from "../repositories/User.repository"
import Database from "../utils/Database"
import UserController from "../controller/user/User.controller"

class UserContainer {
    private static _repository: UserRepository
    private static _controller: UserController

    async getRepository() : Promise<UserRepository> {
        if(UserContainer._repository) return UserContainer._repository
        const database = await new Database().get()
        return UserContainer._repository = new UserRepository(database)
    }

    async getController() : Promise<UserController> {
        if(UserContainer._controller) return UserContainer._controller
        return UserContainer._controller = new UserController(await this.getRepository())
    }

}

export default UserContainer