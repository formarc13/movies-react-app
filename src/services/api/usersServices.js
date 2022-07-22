

export const usersServices = {
    registrarUsuario: async (data) => {
        return await fetch("http://localhost:3001/api/users", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    },
    autenticarUsuario: async (data) => {
        return await fetch("http://localhost:3001/api/users/validar", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(error))
    }
}

/* {
    "name": "Jona",
    "email": "jona@mail.com",
    "password": "123456"
} */