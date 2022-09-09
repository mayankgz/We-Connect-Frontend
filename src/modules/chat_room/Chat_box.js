import { Navbar } from "../../shared/widgets/Navbar";
import { ReactComponent as ChatBg } from "../../assets/images/chat_box_bg.svg";
import "../../css/Chat_box.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Box, TextField } from "@mui/material";
import { useRef } from "react";

export const Chat_box = ({ socket }) => {
  const roomObj = JSON.parse(window.sessionStorage.getItem("room"));
  var user;
  const roomno = roomObj.room_name;
  socket.emit("room", roomno);
  socket.on("connectToRoom", function (data) {
    Append(data);
  });
  async function Append(data) {
    const screen = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.className = "right";
    messageElement.innerText = data.name + " : " + data.message;
    user = data.name;
    screen.append(messageElement);
  }
  function Append2(data) {
    const screen = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.className = "left";
    messageElement.innerText = data.name + ": " + data.message;
    user = data.name;
    screen.append(messageElement);
  }
  function Append3(data) {
    const screen = document.getElementById("chatbox");
    const messageElement = document.createElement("div");
    messageElement.className = "center";
    messageElement.innerText = data.name + ": " + data.message;
    user = data.name;
    screen.append(messageElement);
  }
  const input = useRef("");
  const sumbit = () => {
    const val = input.current.value;
    console.log(val);
    Append({ name: "you", message: val });
    socket.emit("send", val);
    input.current.value = "";
  };
  const name = roomObj.join_name;
  socket.emit("new-user-joined", name);
  socket.on("user-joined", (data) => {
    console.log(data);
    Append3(data);
  });
  socket.on("recieve", (data) => {
    console.log(data.name);
    Append2(data);
  });
  socket.on("disconectionmessage", (data) => {
    console.log(data);
    Append3(data);
  });

  return (
    <>
      <div className="container">
        <Navbar content={roomObj.room_name} />
        <div className="flex flex-row mt-16 bg-sky-100 h-full">
          <div className="basis-5/12 mt-10 ">
            <ChatBg />
          </div>
          <div className="basis-7/12">
            <div className="container">
              <Box
                className="m-3 cont border-4 border-blue-400 grad rounded-2xl"
                id="chatbox"
              ></Box>
            </div>
            <div className="ml-4 flex flex-row">
              <div className="w-5/6">
                <div className="mt-2">
                  <TextField
                    label="Message"
                    variant="filled"
                    fullWidth
                    inputRef={input}
                  />
                </div>
              </div>
              <div className="ml-5 mt-4">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={sumbit}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
