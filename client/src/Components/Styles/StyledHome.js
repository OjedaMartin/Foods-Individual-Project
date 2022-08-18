import styled from "styled-components";

export const StyledHomeOptions = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 100px;
`;

export const StyledHomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

export const StyledHomeSelector = styled.select`
  border-radius: 0.5rem;
  padding: 10px;
  background-color: transparent;
  resize: none;
  outline: none;
`;

export const StyledHomePaginated = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
  text-decoration: none;
  border-bottom: 0.5px solid black;
  padding-inline-start: 0px;

  li {
    color: black;
    float: left;
    padding: 1px 1px;
    text-decoration: none;
  }

  button {
    border-radius: 0.5rem;
    border: 0;
    background-color: transparent;
    font-size: 1.125rem;
    letter-spacing: -0.025em;
    line-height: 1.75rem;
    text-align: center;

    &.active {
      background-color: #3fa9fa;
      color: white;
    }

    &:hover {
      background-color: #3fa9fa;
      color: white;
    }
  }
`;

export const StyledHomeCardCont = styled.div`
margin: 5px;
  border-radius: 0.5rem;
  padding: 16px;
  hight: 400px;
  width: 350px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;
