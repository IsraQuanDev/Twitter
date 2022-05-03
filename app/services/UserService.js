const User = require('./../models/Users')

class UserService {
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }


    static getInfo(user){
        //This requirement can also be solved by returning an explicit list.->return  [user.id, id.username, user.name, user.bio]
        return Object.values(user)
    }
    static update(user, newUsername){
        return user.username = newUsername
    }
    static getAllUsernames(user){
        const userNames = user.map(user => user.username)
        return userNames
    }
}

module.exports = UserService