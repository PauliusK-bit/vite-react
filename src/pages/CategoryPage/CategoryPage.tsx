import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Shoe } from "../../components/types";
import axios from "axios";
import { API_URL } from "../../config/config";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
`;

const ShoeItem = styled.li`
  background-color: #ffffff;
  padding: 20px;
  list-style: none;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }

  a {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #2980b9;
    text-decoration: none;

    &:hover {
      color: #3498db;
    }
  }

  p {
    margin-top: 12px;
    font-size: 16px;
    color: #7f8c8d;
    line-height: 1.5;
  }
`;

const StyledImage = styled.img`
  width: 300px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ShoeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryPage = () => {
  const [loading, setLoading] = useState(true);
  const [shoes, setShoes] = useState<Shoe[]>([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCategoriesShoes = async () => {
      try {
        const { data } = await axios(`${API_URL}/shoes/category/${id}`);

        setShoes(data);
      } catch (error) {
        console.log("Something went wrong", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoriesShoes();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title>Shoes:</Title>
      {shoes.length === 0 ? (
        <p style={{ fontSize: "20px", color: "#bdc3c7", textAlign: "center" }}>
          No shoes found.
        </p>
      ) : (
        <ShoeContainer>
          {shoes.map((shoe) => (
            <ShoeItem key={shoe._id}>
              <StyledImage src={shoe.imageURL} alt="Image" />
            </ShoeItem>
          ))}
        </ShoeContainer>
      )}
    </>
  );
};

export default CategoryPage;
