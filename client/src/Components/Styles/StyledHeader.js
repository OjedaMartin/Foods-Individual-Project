import styled from "styled-components";

export const StyledHeader = styled.header`
box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
max-width: 100%;
padding: 20px 40px;
background-color: #fff;
height: 100px;
`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;
`;
export const Logo = styled.img`
width: 15%;
height: 15%;
background-image: url(Image/Icon.png);
`;
export const StyledRecipeCreate = styled.h1`
border-radius: 0.5rem;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
background-color: ${({ bg }) => bg || "#3FA9FA"};
color: ${({ color }) => color || "#bbb"};

&:hover {
opacity: 0.9;
}
`;
export const StyledA = styled.a`
font-color: "red";
color: "red";
`;
