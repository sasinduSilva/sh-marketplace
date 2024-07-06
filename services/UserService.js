import { post,get } from "../app/apiManager";

class UserService{
    static async login({username,password}){
        const data = JSON.stringify({username,password});
        const loginResult = await post({
            path:"/auth/login",
            requestBody:data
        });

        const result = await loginResult.json();
        return result;
    }
}

export default UserService;

