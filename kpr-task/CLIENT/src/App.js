import { useEffect, useState } from "react";
import { Users } from "./users";
import "./app.css";
import Table from "./Table";
import axios from "axios";


////////////////////// API SEARCH

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  return (
    <div className="app">
        <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())} //convert values to lowercase
        />
      {<Table data={data} />}
    </div>
  );
}

export default App;
