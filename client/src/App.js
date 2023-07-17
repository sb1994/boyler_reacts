import axios from "axios";

import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get("/url");
      // ...
      console.log(response);
    }
    fetchData();
  }, []);
  return <div>App</div>;
};

export default App;
