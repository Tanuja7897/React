import Allcard from "./component/Allcard";
import { useState } from "react";
import {data} from "./utils/data"
function App() {
  const [val, setVal] = useState("");
  const [filterdata, setFilterdata] = useState("");

  // Fetch product data when the component is rendered
  async function fetchProductData() {
    try {
      let res = await fetch("https://dummyjson.com/products");
      let json = await res.json();
      setFilterdata(json.products);
    } catch (error) {
      console.error("Failed to fetch product data", error);
    }
  }

  // Call fetchProductData directly on load
  setTimeout(()=>{
    fetchProductData();
  },15000)
  

  function filterHandler() {
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFilterdata(result); // Apply filtered results
  }

  return (
    <div>
      <h1 className="text-2xl text-red-500 text-center pt-3">
        Raste k Maal Saste Me
      </h1>
      <div>
        <input
          // className="bg-amber-950"
          type="text"
          placeholder="Search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button onClick={filterHandler}>Search</button>
      </div>
      {filterdata.length <= 0 ? (
        <h1>No items</h1>
      ) : (
        <Allcard data={filterdata} />
      )}
    </div>
  );
}

export default App;
