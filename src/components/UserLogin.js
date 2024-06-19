
import background from "../Images/Group.jpg"
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import AuthService from "../services/AuthService";

const UserLogin = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  let loginBody = {
    height: "100vh",
    width: "100%",
    backgroundImage:
      `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    color: "white",
  };

  function fnChange(event) {
    let value = event.target.value;
    switch (event.target.name) {
      case "emailId":
        setUsername(value)
        break;
      case "password":
        setPassword(value)
        break;
    }
  }

  function fnLogin(e) {
    e.preventDefault();
console.log("logging.....")

    var user = { emailId: '', password: '' };
    user.emailId = username;
    user.password = password;
    AuthService.fnSignin(user)
      .then(response => {
        if (response == null) {
          alert("You have not logged in");
          navigate("/userlogin");
        }
        var token = response.data.accessToken;
        var id = response.data.id
        localStorage.setItem("token", token);
        navigate("/ldashboard")
        localStorage.setItem("id", id);
        console.log(id)
      })
      .catch(error => {
        alert("Wrong Credentials entered")
      }, [])
  }

  

  return (
    <div>

      <div className="head">
        <a href="/" style={{color:'black'}}><h2>STITCHCLUB</h2></a>
      </div>
      <div className="backlogin" style={loginBody}>
        <form onSubmit={fnLogin}>
          <div className="f1">

            <div class="main-text">
              <input type="email" name="emailId" class="no-outline"  onChange={fnChange} placeholder="Email" />
              <input type="password" name="password" class="no-outline"  onChange={fnChange} placeholder="Password" />
            </div>
            <button type="submit" class="btn2">Login</button>
            <br></br><br></br>
            <h5>Don't have an account ?</h5><br></br>

            <p><a href="signup">Signup </a></p>


          </div>



          {/* </div> */}
        </form>
      </div>

    </div>



  )
}
export default UserLogin;