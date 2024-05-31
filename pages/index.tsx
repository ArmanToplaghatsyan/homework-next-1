import { ICategory, IProduct } from "@/type/type";
import axios from "axios";

export default function Home({
  products,
  categories,
}: {
  products: IProduct[];
  categories: ICategory[];
}) {
  return (
    <div></div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get("https://api.escuelajs.co/api/v1/categories");
  const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
  );

  return {
      props: {
          products: data,
          categories: res.data,
      },
  };
};