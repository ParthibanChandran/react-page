import React from "react";

import { SearchPanel, SearchButton, SearchBar } from "./style";

export default function SearchBarComponent(props) {
  let { changed, clicked, pressed } = props;
  return (
    <SearchPanel>
      <label htmlFor="searchbar">.</label>
      <SearchBar id="searchbar" onKeyPress={pressed} onChange={changed} value={props.value}></SearchBar>
      <SearchButton onClick={clicked}>
        <i className="fa fa-search">.</i>
      </SearchButton>
    </SearchPanel>
  );
}
