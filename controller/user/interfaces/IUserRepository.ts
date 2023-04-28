import IUserDto from "../../../dto/user/IUser.dto"
import UserCreationDto from "../../../dto/user/IUserCreation.dto"
import IUserUpdateDto from "../../../dto/user/IUserUpdate.dto"
import Id from "../../../utils/data_objects/user/Id"

interface IUserRepository {
    getById(id: Id) : Promise<IUserDto>,
    isExists(id: Id): Promise<boolean>,
    create(dto: UserCreationDto): Promise<void>,
    update(dto: IUserUpdateDto): Promise<any>,
    delete(id: Id): Promise<void>
}

export default IUserRepository