import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

class MatchService {

    async getMatches() {
        return await axios.get(`${baseUrl}/matches`).then((response) => response.data)
        .catch((error) => {
            console.error('Error fetching data:', error)
        })
    }
}

export default new MatchService