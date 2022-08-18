import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../Redux/actions";
import { Link } from "react-router-dom";

import {
  SearchBarStyled,
  ButtonStyled,
  InputStyled,
} from "./Styles/StyledSearchBar";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function inputChangeHandler(e) {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  }
  function submitHandler(e) {
    e.preventDefault();
    dispatch(getRecipeName(name));
  }

  return (
    <SearchBarStyled>
      <InputStyled
        type="text"
        placeholder="Search recipes by name..."
        onChange={(e) => inputChangeHandler(e)}
      />
      <ButtonStyled type="submit" onClick={(e) => submitHandler(e)}>
        Search
      </ButtonStyled>
    </SearchBarStyled>
  );
}

//setstate ""
