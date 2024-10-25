import axios from "axios";

class UserService {

    // async getUsers() {
    //     const url = "http://localhost:3001/api/users";
    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJlbWFpbCI6Imd1aWxoZXJtZW1hY2hhZG9AcWEuY29tIiwiaWF0IjoxNzI5ODY2OTgyLCJleHAiOjE3Mjk4NzA1ODJ9.bY6i6TuR1C-UKRt6TnyaDSKVNrQaVqb-9vokSOPxHNY";
        
    //     await axios.get(url, {headers: {'Authorization': "Bearer " + token}}).then(function(response) {
    //        return response.data;
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //         return [];
    //     });
    // }
    
    async getUsers() {
        const url = "http://localhost:3001/api/users";
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJlbWFpbCI6Imd1aWxoZXJtZW1hY2hhZG9AcWEuY29tIiwiaWF0IjoxNzI5ODY2OTgyLCJleHAiOjE3Mjk4NzA1ODJ9.bY6i6TuR1C-UKRt6TnyaDSKVNrQaVqb-9vokSOPxHNY"
        try {
            const response = await axios.get(url, {headers: {'Authorization': "Bearer " + token}});
            return response.data; 
        } catch (error) {
            console.log(error);
            return []; 
        }
    }

    async createUser(data: any) {
        axios.post('http://localhost:3001/api/user', data).then( 
            function (response) {
                if(response.status == 201) {
                    console.log("User added")
                }
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
    }

    async updateUser(id: number, data: any) {
        axios.put(`http://localhost:3001/api/user/:${id}`, id).then( 
            function (response) {
                if(response.status == 201) {
                    console.log("Atualizou o usuario")
                }
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
    }

    async deleteUser(id: number) {
        axios.delete(`http://localhost:3001/api/user/:${id}`).then( 
            function (response) {
                if(response.status == 204) {
                    console.log("Deletou o usuario")
                }
            }
        ).catch(
            function (error) {
                console.log(error)
            }
        )
    }
}

export default new UserService();