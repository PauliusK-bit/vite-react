import { ShoeProps } from "./types";

const ShoeItem = ({ data }: ShoeProps) => {
  const { imageURL, name } = data;

  return (
    <>
      <div>
        <p>{name}</p>
        <img src={imageURL} alt="..." />
      </div>
    </>
  );
};

export default ShoeItem;
