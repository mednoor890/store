import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import SearchResults from "../components/Search/SearchResult";

//import Footer from "../components/Footer/Footer";

const Search:React.FC = () => {
  return <>
  <Navbar/>
  <SearchResults />
  </>;
};

export default Search;