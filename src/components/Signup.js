
import background from "../Images/background.jpg"

const Signup = () => {

    let imageStyle = {
        height: "100vh",
        width: "100%",
        backgroundImage:
        `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white", 
     };

    return (
        <div>
            <div class="sign" style={imageStyle} >
                <div className="head">
                    <h2>SNITCH</h2>
                </div>
                <div className="backlogin">
                    <form>
                        <div className="f2">

                            <div class="main-text">
                                <input type="username" class="no-outline" placeholder="Email" />
                                <input type="text" class="no-outline" placeholder="Full Name" />
                                <input type="password" class="no-outline" placeholder="Password" />
                                <input type="text" class="no-outline" placeholder="Mobile" />
                                


                            </div>
                            <button type="button" class="btn3">Register</button>



                        </div>



                        {/* </div> */}
                    </form>
                </div>
            </div>



        </div>


    )
}
export default Signup;