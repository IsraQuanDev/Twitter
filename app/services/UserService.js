const User = require('./../models/Users')

class UserService {
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
}

module.exports = UserService