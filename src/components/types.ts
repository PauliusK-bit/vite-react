export interface Shoe {
  name: string;
  imageURL: string;
  _id: string;
}

export interface ShoeProps {
  data: Shoe;
}

export interface Category {
  _id: string;
  name: string;
}

export interface CategoryProps {
  data: Category;
}
