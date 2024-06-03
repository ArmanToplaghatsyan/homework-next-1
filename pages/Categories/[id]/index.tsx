import { ICategory } from "@/type/type";
import axios from "axios";
import Image from "next/image";

export default function DetailsCategory({ category }: { category: ICategory }) {
    return (
        <div>
            {category ? (
                <div>
                    <h2>{category.name}</h2>
                    <Image
                        src={category.image}
                        width={350}
                        height={500}
                        alt="image"
                    />
                </div>
            ) : (
                <>...</>
            )}
        </div>
    );
}

export const getServerSideProps = async ({ params }: any) => {
    const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/categories/" + params.id
    );

    return {
        props: {
            category: data,
        },
    };
};
