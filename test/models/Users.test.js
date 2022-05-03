const User = require('./../../app/models/Users')

describe("Unit Tests for User class", ()=>{

    test('Create an User object', ()=>{
        // Aquí invocas el código que vas a usar en tu app
        const user = new User(1, "carlogilmar","Carlo","Bio","dateCreated","lastUpdated")
    //Aquí validas los resultados de ese código
    // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)4

    expect(user.id).toBe(1)
    expect(user.username).toBe("carlogilmar")
    expect(user.name).toBe("Carlo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
    
    });
})