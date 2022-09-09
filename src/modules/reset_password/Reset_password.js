import { Navbar } from "../../shared/widgets/Navbar";
import { ReactComponent as ResetImg } from "../../assets/images/reset-password.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef,useState } from "react";
import { API_CLIENT } from "../../services/api-client";
import { useAlert } from 'react-alert';

export const Reset_password = () => {
  const oldPassword = useRef("");
  const newPassword = useRef("");
  const [toggle, setToggle] = useState(true);
  const alert = useAlert();

  const change = () => {
    if (toggle === true) {
      return (
        <Button variant="contained" size="large" onClick={changePassword}>
          Change
        </Button>
      );
    } else {
      return (
        <a href="/">
          <Button variant="contained" size="large" onClick={changePassword}>
            Change
          </Button>
        </a>
      );
    }
  };

  const changePassword = async () => {
    const opwd = oldPassword.current.value;
    const npwd = newPassword.current.value;
    const object = JSON.parse(window.sessionStorage.getItem("Object"));

    const obj = { userid: object.userid, password: opwd, new_password: npwd };
    console.log("change Password object is ", obj);
    try {
      const result = await API_CLIENT.post(
        process.env.REACT_APP_RESET_PASSWORD_URL,
        obj
      );
      console.log(result.data);
      if ((result.data.matchedCount === 0 && toggle === true) || (npwd === '' || opwd === '')) {
        alert.show("Wrong Password or Incomplete Fields!!!");
      } else {
        setToggle(false);
      }
    } catch (err) {
      console.log("Some Error occured", err);
    }
  };

  return (
    <>
      <div className="container">
        <Navbar content="Reset Password" />
        <div className="flex flex-col profile_grad mt-16">
          <div className="flex basis-1/2 justify-center align-center">
            <div className="h-1/2 w-5/12">
              <ResetImg />
            </div>
          </div>
          <div className="flex basis-1/2 mt-12">
            <div className="w-full flex justify-center align-center">
              <div className="ml-12">
                <TextField
                  required
                  id="outlined-disabled"
                  label="Old Password"
                  type="password"
                  inputRef={oldPassword}
                />
              </div>
              <div className="ml-12">
                <TextField
                  required
                  id="outlined-disabled"
                  label="New Password"
                  type="password"
                  inputRef={newPassword}
                />
              </div>
              <span className="m-2 ml-8">
                {change()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
