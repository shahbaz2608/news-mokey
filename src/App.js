import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
    const [count, setcount] = useState(5);

    const getPageSize = (e) => {
      setcount(e.target.value);
    }
    return (
      // <div>App</div>
      <>
        <Navbar getPageSize={getPageSize} />
        {/* <News page_size={count} /> */}
      </>
    );
}

export default App;
