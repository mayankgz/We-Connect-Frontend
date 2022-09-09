import { ReactComponent as LoginImg } from "../../assets/images/login.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../css/Login.css";
import { useRef, useState } from "react";
import { Navbar } from "../../shared/widgets/Navbar";
import { API_CLIENT } from "../../services/api-client";
import { useAlert } from 'react-alert';

export const Login = () => {
  const userid = useRef("");
  const pwd = useRef("");
  const [toggle, setToggle] = useState(false);
  const alert = useAlert();

  const doLogin = async () => {
    const uid = userid.current.value;
    const password = pwd.current.value;
    const userObject = { userid: uid, password: password };
    console.log("UserObject is ", userObject);
    try {
      const result = await API_CLIENT.post(
        process.env.REACT_APP_LOGIN_URL,
        userObject
      );
      var object = result.data;
      if (object.userid) {
        setToggle(true);
      } else {
        alert.show("Wrong User-ID or Password");
      }
      console.log("Data is from object", object);
      window.sessionStorage.setItem("Object", JSON.stringify(object));
    } catch (err) {
      console.log("Error in Login Call ", err);
    }
  };
  return (
    <>
      <div className="container">
        <Navbar content="Login" />
        <div className="flex flex-row">
          <div className="basis-2/5 flex justify-center items-center log_grad">
            <div className="h-96 text-center">
              {toggle === false ? (
                <div></div>
              ) : (
                <div className="mb-8 text-xl">
                  You have logged in successfully !!!
                </div>
              )}
              <div className="mt-3">
                <TextField
                  required
                  id="outlined-required"
                  label="User ID"
                  inputRef={userid}
                />
              </div>
              <div className="mt-3">
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  type="password"
                  inputRef={pwd}
                />
              </div>

              <div className="mt-3">
                <Button variant="contained" onClick={doLogin}>
                  Log In
                </Button>
              </div>
              <div className="mt-3 text-lg">
                <span>Don't have an account? </span>
                <a href="/register" className="text-sky-900 anchor">
                  Register Now
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-1/2 basis-3/5">
            <LoginImg />
          </div>
        </div>
      </div>
    </>
  );
};
