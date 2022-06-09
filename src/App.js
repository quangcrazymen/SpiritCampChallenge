import "./styles.css";

import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import Layout3 from "./Layout3";

export default function App() {
  //Please assign your name here!
  const myNameIs = "Nguyễn Đỗ Quang";

  return (
    <div className="App">
      <h1>Welcome to the challenge: {myNameIs}</h1>
      <p>
        Challenge for <strong>FRONTEND DEVS</strong> includes 3 algorithms
        (check tab tests) and three layouts
      </p>
      <p>
        Challenge for <strong>BACKEND DEVS</strong> includes 5 algorithms (check
        tab tests)
      </p>
      <hr />

      <Layout1 />
      <Layout2 />
      <Layout3 />
    </div>
  );
}
