const UserRepository = require("../repositories/user.repository");
const userRepository = new UserRepository()

class UserService  {

    async listUser(page) {        
        return await userRepository.listUser(page)
    }

    async singleUser(id) {        
        return await userRepository.singleUser(id)
    }

    async createUser(user) {        
        return await userRepository.createUser(user)
    }

}

module.exports = UserService;