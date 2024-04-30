import React, {useState} from "react";

function Search({searchPlant, setSearchPlant}) {
  // const [searchPlant, setSearchPlant] = useState('')

  const handleChange = (e) => {
    // const changePlant = e.target.value
    // setSearchPlant(changePlant)
    setSearchPlant(e.target.value)
  }
  console.log(searchPlant)
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
