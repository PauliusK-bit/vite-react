import { useEffect, useState } from "react";
import { Shoe } from "./types";
import axios from "axios";
import { API_URL } from "../config/config";
import ShoeItem from "./ShoeItem";

const ShoesList = () => {
  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoesData = async () => {
      try {
        const { data } = await axios(`${API_URL}/shoes`);

        setShoes(data);
      } catch (err) {
        console.log("Failed to fetching shoes", err);
      }
    };
    fetchShoesData();
  }, []);

  return (
    <>
      <div>
        {shoes.map((shoe, index) => (
          <ShoeItem key={index} data={shoe} />
        ))}
      </div>
    </>
  );
};

export default ShoesList;
