import Email from "../../utils/data_objects/Email"
import Password from "../../utils/data_objects/user/Password"
import Id from "../../utils/data_objects/user/Id"

interface IUserUpdateDto {
    username?: Email,
    password?: Password,
    email?: Email,
    id: Id
}

export default IUserUpdateDto