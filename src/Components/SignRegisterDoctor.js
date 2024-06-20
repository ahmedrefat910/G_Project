import "../CSS/Sign.css";
import emailIcon from "../images/Message_fill.png";
import padlockIcon from "../images/Lock_duotone_line.png";
import userIcon from "../images/User_fill.png";
import image from "../images/Rectangle 14.png";
import upload from "../images/upload.png";
import { useNavigate } from "react-router-dom";

function SignRegister() {
  
    const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={image} alt="" />
          <div className="Text">Create your new account</div>
          <div className="underline"></div>
        </div>
        <form>
          <div className="inputs">
            <div className="input">
              <img src={userIcon} alt="" />
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input">
              <img src={emailIcon} alt="" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input">
              <img src={padlockIcon} alt="" />
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>

          <div className="V-Content">
            <img src={upload} alt="logo" />
            <p> Click here to upload the image </p>
          </div>

          <div className="submit-container">
            <button
              className="submit-register"
              type="submit"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignRegister;
