
import background from "../Images/Group.jpg"

const UserLogin = () => {

  let loginBody = {
    height: "100vh",
    width: "100%",
    backgroundImage:
    `url(${background})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition:"top",
    color: "white", 
 };

  return (
    <div>
      
      <div className="head">
        <h2>SNITCH</h2>
      </div>
        <div className="backlogin" style={loginBody}>
        <form>
              <div className="f1">

                <div class="main-text">
                  <input type="username" class="no-outline" placeholder="Email"/>
                  <input type="password" class="no-outline" placeholder="Password"/>
                </div>
                <button type="button" class="btn2">Login</button>
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