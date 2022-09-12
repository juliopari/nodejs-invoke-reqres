const { LIST_USER } = require('../config');
const { SINGLE_USER } = require('../config');
const { CREATE_USER } = require('../config');

const axios = require('axios').default

class UserRepository {

    async listUser (page){ 
        const response = await axios.get(LIST_USER + page);        
        return response.data;
    }

    async singleUser (id){ 
        const response = await axios.get(SINGLE_USER + id);        
        return response.data;
    }

    async createUser (user){ 
        const response = await axios.post(CREATE_USER, {
            name: user.name,
            job: user.job
        });        
        return response.data;
    }

}

module.exports = UserRepository;