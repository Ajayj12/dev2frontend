import axios from "axios";



class TestService
{
    URL="http://localhost:5001/auth/login";



    fnAll()
    {
        return axios.get(this.URL+"all");
    }



    fnGetTokenFromLS()
    {
        var jwt=localStorage.getItem("token");
        if(jwt==null)
        {
            alert('you have not logged in')
            return null;
        }
        return jwt;
    }



    fnUser()
    {
        var jwt=this.fnGetTokenFromLS();   
        
        var token="Bearer "+jwt;
        return axios.get(this.URL+"user",{headers:{Authorization:token}});
    }



    fnMod()
    {
        var jwt=this.fnGetTokenFromLS();
        
        var token="Bearer "+jwt;
        return axios.get(this.URL+"mod",{headers:{Authorization:token}});
    }



    fnAdmin()
    {
        var jwt=this.fnGetTokenFromLS();
        if(jwt==null)
            return null;
        var token="Bearer "+jwt;
        return axios.get(this.URL+"admin",{headers:{Authorization:token}})
    }
}



export default new TestService();