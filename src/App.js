import Loader from "../src/modules/loader/Loader";
import { useState,useEffect } from "react";
import Container from "./modules/container/Container";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 900);
  }, []);

  return (
    <>
      {loading === false ? (
        <Container/>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
