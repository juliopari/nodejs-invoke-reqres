
const UserService = require('../services/user.service');
const userService = new UserService()

class UserController  {

    async listUser(page) {
        return await userService.listUser(page)
    }
    
    async singleUser(id) {
        return await userService.singleUser(id)
    }

    async createUser(user) {
        return await userService.createUser(user)
    }
    
}

module.exports = UserController;