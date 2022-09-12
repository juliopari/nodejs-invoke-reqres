const express =  require('express')
const router = express.Router();

const UserController = require('./controllers/user.controller')
const userController = new UserController();

router.post('/list-user', async (req,res)=>{    
    const response =  await userController.listUser(req.body.page);
    res.json(response)
})

router.post('/single-user', async (req,res)=>{    
    const response =  await userController.singleUser(req.body.id);
    res.json(response)
})

router.post('/create-user', async (req,res)=>{        
    const response =  await userController.createUser(req.body);
    res.json(response)
})

module.exports = router;