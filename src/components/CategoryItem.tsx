import { Link } from "react-router";
import { CategoryProps } from "./types";
import styled from "styled-components";

const NavBar = styled.nav`
  padding: 16px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.div`
  margin-right: 24px;

  font-size: 1.2em;

  a {
    text-decoration: none;
    color: #333;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #e2e6ea;
      color: #000;
    }
  }
`;

const CategoryItem = ({ data }: CategoryProps) => {
  const { name, _id } = data;

  return (
    <>
      <NavBar>
        <NavItem>
          <Link to={`/categories/${_id}`}>{name}</Link>
        </NavItem>
      </NavBar>
    </>
  );
};

export default CategoryItem;
