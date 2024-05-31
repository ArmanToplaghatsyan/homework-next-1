import { ICategory } from "@/type/type";
import axios from "axios";
import Link from "next/link";

export default function Categories({
    categories,
}: {
    categories: ICategory[];
}) {
    console.log(categories);
    
    return (
        <div>
            {
            categories?.map((elm) => {
                return (
                    <div key={elm.id}>
                        <h2>{elm.name}</h2>
                        <img src={elm.image} width={250} height={250} />
                        <Link href={'/Categories/details'+elm.id}/>
                    </div>
                );
            })}
        </div>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get(
      'https://api.escuelajs.co/api/v1/categories'
    );
  
    return {
      props: {
        categories: data,
      },
    };
  };