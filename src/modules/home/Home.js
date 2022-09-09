import Navbar from "./Navbar";
import { ReactComponent as Bg } from "../../assets/images/background.svg";
import Button from "@mui/material/Button";
import "../../css/Home.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
          <div className="flex flex-row">
            <div className="w-1/2 h-1/2 basis-1/2">
              <Bg />
            </div>
            <div className="basis-1/2 flex justify-center items-center grad">
              <div className="flex flex-col font-mono">
                <div className="h-96 ml-8 text-white">
                  <p className="text-5xl">
                    Simple.Secure.
                    <br />
                    Reliable Messaging
                  </p>
                  <p className="text-2xl mt-6">
                    With We-Connect,
                    <br /> you'll get fast, simple, secure messaging for free*,
                    <br /> available all over the world.
                  </p>
                  <p className="text-2xl mt-3 ml-8">* End to end Encripted</p>
                </div>
                <div className="text-center h-48">
                  <span className="m-2">
                    <a href="/create_room"><Button variant="contained" size="large">Create-Room</Button></a>
                  </span>
                  <span className="m-2">
                    <a href="/join_room"><Button variant="contained" size="large">Join-Room</Button></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
