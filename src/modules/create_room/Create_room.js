import { Navbar } from "../../shared/widgets/Navbar";
import { ReactComponent as RoomImg } from "../../assets/images/room.svg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { API_CLIENT } from "../../services/api-client";
import { useAlert } from 'react-alert'

export const Create_room = () => {
  const name = useRef("");
  const jname = useRef("");
  const [toggle, setToggle] = useState(true);
  const alert = useAlert();
  const change = () => {
    if (toggle === true) {
      return (
        <Button variant="contained" size="large" onClick={roomName}>
          Create
        </Button>
      );
    } else {
      return (
        <a href="/room_name">
          <Button variant="contained" size="large" onClick={roomName}>
            Create
          </Button>
        </a>
      );
    }
  };
  const roomName = async () => {
    const Rname = name.current.value;
    const Jname = jname.current.value;
    const roomObj = { room_name: Rname, join_name: Jname };
    const userObject = { roomname: Rname };
    window.sessionStorage.setItem("room", JSON.stringify(roomObj));
    try {
      const result1 = await API_CLIENT.post(
        process.env.REACT_APP_FINDROOM_URL,
        userObject
      );
      let name = result1.data.roomname;
      if (name === Rname && toggle===true) {
        alert.show("this room already exist");
      } else if(toggle===true){
        const result = await API_CLIENT.post(
          process.env.REACT_APP_ADDROOM_URL,
          userObject
        );
        setToggle(false);
        console.log("data is ", result);
      }
    } catch (err) {
      console.log("Error in Login Call ", err);
    }
  };
  return (
    <>
      <div className="container">
        <Navbar content="Create Room" />
        <div className="flex flex-col profile_grad">
          <div className="flex basis-1/2 justify-center align-center">
            <div className="h-1/2 w-5/12">
              <RoomImg />
            </div>
          </div>
          <div className="flex basis-1/2">
            <div className="w-full flex justify-center align-center">
              <div className="ml-12">
                <TextField
                  required
                  id="outlined-disabled"
                  label="Room Name"
                  inputRef={name}
                />
              </div>
              <div className="ml-12">
                <TextField
                  required
                  id="outlined-disabled"
                  label="Joining Name"
                  inputRef={jname}
                />
              </div>
              <span className="m-2 ml-8">{change()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
