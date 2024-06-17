
import axios from "axios";



class AuthService
{
URL="http://localhost:5001/auth/login";



fnSignin(user)
{
return axios.post(this.URL,user);
}

fnSignin(admin){
    return axios.post(this.URL,admin); 
}
}



export default new AuthService();

