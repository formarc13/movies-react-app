

export const moviesServices = {
    obtenerPeliculas: async () => {
        return await fetch("http://localhost:3001/api/movies", {
            headers: {
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9uYSIsImlkIjoxLCJpYXQiOjE2NTgxODgwNDh9.Sy6cEcRXXjFhhU1_iPiCAIMOsR3EE28qXdrnuhyzVSc"
            },
        })
        .then(res => res.json())
        .then(result => result)
        .catch(error => console.log(error))
    }
}