import { Chat_box } from "../chat_room/Chat_box";
import { Create_room } from "../create_room/Create_room";
import { Home } from "../home/Home";
import { Join_room } from "../join_room/Join_room";
import { Login } from "../login/Login";
import { Profile } from "../profile/Profile";
import { Register } from "../register/Register";
import { Reset_password } from "../reset_password/Reset_password";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8085");

function Container() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create_room" element={<Create_room />} />
          <Route path="/join_room" element={<Join_room />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset_password" element={<Reset_password />} />
          <Route path="/room_name" element={<Chat_box socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Container;