import { Navbar } from "../../shared/widgets/Navbar";
import { ReactComponent as ProfileImg } from "../../assets/images/profile.svg";
import "../../css/Profile.css";
import TextField from "@mui/material/TextField";

export const Profile = () => {
  const object = JSON.parse(window.sessionStorage.getItem("Object"));

  const name = () => {
    if (object.name) {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label={object.name} />
        </div>
      );
    } else {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label="No Information" />
        </div>
      );
    }
  };

  const userid = () => {
    if (object.userid) {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label={object.userid} />
        </div>
      );
    } else {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label="No Information" />
        </div>
      );
    }
  };

  const phone_number = () => {
    if (object.phone) {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label={object.phone} />
        </div>
      );
    } else {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label="No Information" />
        </div>
      );
    }
  };

  const address = () => {
    if (object.address) {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label={object.address} fullWidth />
        </div>
      );
    } else {
      return (
        <div className="mt-3">
          <TextField disabled id="outlined-required" label="No Information" fullWidth />
        </div>
      );
    }
  };

  return (
    <>
      <div className="container">
        <Navbar content="Profile" />
        <div className="flex flex-row">
          <div className="w-1/2 h-1/2 basis-3/5">
            <ProfileImg />
          </div>
          <div className="basis-2/5 flex justify-center items-center profile_grad">
            <div className="h-fit text-center">
              <div>Name</div>
              {name()}
              <div>User-ID</div>
              {userid()}
              <div>Phone Number</div>
              {phone_number()}
              <div>Address</div>
              <div className="mt-3">{address()}</div>
              <div className="mt-6 text-lg">
                <a href="/reset_password" className="text-sky-900 anchor bg-sky-700 p-2 rounded-lg text-white">
                  Reset Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
