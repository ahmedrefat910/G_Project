
import "../CSS/Sign.css";
import emailIcon from "../images/Message_fill.png";
import padlockIcon from "../images/Lock_duotone_line.png";
import image from "../images/Rectangle 14.png";
import { useNavigate } from "react-router-dom";


function SignLogin() {
    const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={image} alt="" />
          <div className="Text">Login to your account</div>
          <div className="underline"></div>
        </div>
        <form>
          <div className="inputs">
            <div className="input">
              <img src={emailIcon} alt="" />
              <input type="text" placeholder="username" />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="forgot-password">
            Forget Password? <span> Click Here </span>
          </div>
          <div className="submit-container">
            <button
                          className="submit-login" type="submit" onClick={() => navigate("/home")}
            > Login </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignLogin;