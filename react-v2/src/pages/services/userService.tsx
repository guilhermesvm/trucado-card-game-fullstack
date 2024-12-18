import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

class UserService {

    async getUsers() {
        return await axios.get(`${baseUrl}/users`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJlbWFpbCI6ImFkbWluQHFhLmNvbSIsImlhdCI6MTczMDk5NDQ4NywiZXhwIjoxNzMxMDgwODg3fQ.gEk-4DhBWnID1HH8iO6bSWWrh_rTf3A8tuO8koxHDFE'
            }
        })        
        .then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
    }

    getUser(id: number) {
        return axios.get(`${baseUrl}/user/${id}`, ).then((response) => response.data)
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUser(data: any) {
        return axios.post(`${baseUrl}/user`, data).then((response) => response.status)
            .catch((error) => {
                console.error('Error fetching data:', error)
            }
        )
    }

    deleteUser(id: number) {
        return axios.delete(`${baseUrl}/user/${id}`).then((response) => response.status)
            .catch((error) => {
                console.error('Erro ao remover usuario', error)
            })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUser(id: number, data: any) {
        return axios.put(`${baseUrl}/user/${id}`, data)
            .then((response) => {
                console.log(response.status)
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
            })
    }
}

export default new UserService