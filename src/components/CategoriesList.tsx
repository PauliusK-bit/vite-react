import { useEffect, useState } from "react";
import { Category } from "./types";
import axios from "axios";
import { API_URL } from "../config/config";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";

const StyledLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const { data } = await axios(`${API_URL}/categories`);

        setCategories(data);
      } catch (err) {
        console.log("Failed to fetching categories", err);
      }
    };
    fetchCategoriesData();
  }, []);

  return (
    <>
      <StyledLink>
        {categories.map((category, index) => (
          <CategoryItem key={index} data={category} />
        ))}
      </StyledLink>
    </>
  );
};

export default CategoriesList;
