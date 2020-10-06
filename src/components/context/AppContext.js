import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from "react";

export const DataContext = createContext();
export const DataChangeContext = createContext();
export const DataUpdateContext = createContext();
export const QueryContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;

const DataProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleTextChange = async (param) => {
    try {
      setQuery(param);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = useCallback(async () => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

      const response = await fetch(url);
      const jsondata = await response.json();
      await setMovies(jsondata.results);
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  const contextValue = useMemo(
    () => ({
      movies,
      query,
      handleTextChange,
      handleSearch,
    }),
    [movies, query, handleSearch]
  );

  return (
    <DataContext.Provider value={contextValue}>
      {/* <DataUpdateContext.Provider value={handleSearch}>
        <DataChangeContext.Provider value={handleTextChange}>
          <QueryContext.Provider value={query}>
            {children}
          </QueryContext.Provider>
        </DataChangeContext.Provider>
      </DataUpdateContext.Provider> */}
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  return useContext(DataContext);
}

export function useDataChange() {
  return useContext(DataChangeContext);
}

export function useDataUpdate() {
  return useContext(DataUpdateContext);
}

export function useQuery() {
  return useContext(QueryContext);
}

export default DataProvider;
