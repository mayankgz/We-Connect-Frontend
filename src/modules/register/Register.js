import { ReactComponent as RegisterImg } from "../../assets/images/register.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../../css/Login.css";
import { Navbar } from "../../shared/widgets/Navbar";
import { useRef } from "react";
import { API_CLIENT } from "../../services/api-client";
import { useState } from "react";
import { useAlert } from 'react-alert';

export const Register = () => {
  const userid = useRef("");
  const pwd = useRef("");
  const address = useRef("");
  const phone = useRef("");
  const Name = useRef("");
  const alert = useAlert();
  const [toggle, setToggle] = useState(true);

  const change = () => {
    if (toggle === true) {
      return (
        <Button variant="contained" onClick={doRegister}>
          Register
        </Button>
      );
    } else {
      return (
        <a href="/">
          <Button variant="contained" onClick={doRegister}>
            Register
          </Button>
        </a>
      );
    }
  };
  const doRegister = async () => {
    const uid = userid.current.value;
    const password = pwd.current.value;
    const add1 = address.current.value;
    const phone1 = phone.current.value;
    const name = Name.current.value;

    const userObject = {
      userid: uid,
      password: password,
      address: add1,
      phone: phone1,
      name: name,
    };
    console.log("UserObject is ", userObject);
    window.sessionStorage.setItem("Object", JSON.stringify(userObject));
    if (uid !== "" && password !== "" && name !== "" && toggle===true) {
      try {
        const result = await API_CLIENT.post(
          process.env.REACT_APP_REGISTER_URL,
          userObject
        );
        console.log("data is ", result);
      } catch (err) {
        console.log("Error in Login Call ", err);
      }
      setToggle(false);
    } else {
      alert.show("Incomplete Fields!!!");
    }
  };

  return (
    <>
      <div className="container">
        <Navbar content="Register" />
        <div className="flex flex-row">
          <div className="basis-2/5 flex justify-center items-center log_grad">
            <div className="h-3/5 text-center">
              <div className="mt-3">
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  inputRef={Name}
                />
              </div>
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
                <TextField
                  id="outlined-required"
                  label="Phone-Number"
                  inputRef={phone}
                />
              </div>
              <div className="mt-3">
                <TextField
                  id="outlined-required"
                  label="Address"
                  multiline
                  rows={3}
                  fullWidth
                  inputRef={address}
                />
              </div>
              <div className="mt-3">
                {change()}
              </div>
            </div>
          </div>
          <div className="w-1/2 h-1/2 basis-3/5">
            <RegisterImg />
          </div>
        </div>
      </div>
    </>
  );
};
