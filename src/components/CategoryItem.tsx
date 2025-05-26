import { Link } from "react-router";
import { CategoryProps } from "./types";

const CategoryItem = ({ data }: CategoryProps) => {
  const { name, _id } = data;

  return (
    <>
      <div>
        <h2>
          <Link to={`/categories/${_id}`}>{name}</Link>
        </h2>
        <p>{_id}</p>
      </div>
    </>
  );
};

export default CategoryItem;
