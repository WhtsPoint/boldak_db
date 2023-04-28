import Email from "../../utils/data_objects/Email"
import Username from "../../utils/data_objects/user/Username"
import Password from "../../utils/data_objects/user/Password"
import IUserUpdateDto from "./IUserUpdate.dto"

interface IUserCreationDto {
    username: Username,
    password: Password,
    email: Email
}

export default IUserCreationDto