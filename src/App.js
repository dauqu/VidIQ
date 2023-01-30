import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Body from "./components/Body/Body";
import Download from "./components/Body/Download";
import Panel from "./components/Body/Panel";
import Parameter from "./components/Body/Parameter";
import Summary from "./components/Body/Summary";
import ViewFile from "./components/Body/ViewFile";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/dashboard" element={<Panel />} />
        <Route path="/viewfile" element={<ViewFile />} />
        <Route path="/parameter" element={<Parameter />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/download" element={<Download />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </div>
  );
}

export default App;
