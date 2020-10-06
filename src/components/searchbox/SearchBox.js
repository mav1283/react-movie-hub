import React, { useEffect } from "react";
import { useData } from "../context/AppContext";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  //const [data, setData] = useState(null);
  const { query, handleTextChange, handleSearch } = useData();
  // const handleTextChange = useDataChange();
  // const handleSearch = useDataUpdate();
  // const query = useQuery();
  // const [query, setQuery] = useState("");

  // const handleChange = async (e) => {
  //   try {
  //     setQuery(e.target.value);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  //     const response = await fetch(url);
  //     const jsondata = await response.json();
  //     await setData(jsondata);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(e.target.value);
  };

  const handleChange = (e) => {
    return handleTextChange(e.target.value);
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className="searchbox-container">
      <form onSubmit={handleSubmit} className="searchbox">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
