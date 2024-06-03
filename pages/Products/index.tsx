import { IProduct } from "@/type/type";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Products({ products }: { products: IProduct[] }) {
    console.log(products);
    
const [arr,setarr] = useState<IProduct[]>([...products])

    return (
        <div>
            {arr?.map((elm: any) => {
                return (
                    <div key={elm.id}>
                        <h2>{elm.title}</h2>
                        <p>{elm.description}</p>
                        <p>{elm.price}</p>
                        <Image
                            src={elm.images}
                            width={250}
                            height={300}
                            alt="Iamge..."
                        />
                        <Link href={"/Products/" + elm.id}>See</Link>
                        <button
                            onClick={async () => {
                                try {
                                    await axios.delete(
                                        `https://api.escuelajs.co/api/v1/products/${elm.id}`
                                    );
                                    console.log(
                                        "Resource deleted successfully"
                                    );

                                    const { data } = await axios.get(
                                        "https://api.escuelajs.co/api/v1/products"
                                    );
                                    setarr(data);
                                } catch (error) {
                                    console.error(error);
                                }
                            }}
                        >
                            &times;
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export const getStaticProps = async () => {
    const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
    );

    return {
        props: {
            products: data,
        },
    };
};
