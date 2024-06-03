"use client";

import { ICategory } from "@/type/type";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Categories({
    categories,
}: {
    categories: ICategory[];
}) {
    console.log(categories);

    const [arr, setarr] = useState<ICategory[]>([...categories]);
    return (
        <div>
            {arr?.map((elm) => {
                return (
                    <div key={elm.id}>
                        <img
                            src={elm.image}
                            width={250}
                            height={250}
                            alt="image"
                        />
                        <Link href={"/Categories/" + elm.id}>{elm.name}</Link>

                        <button
                            onClick={async () => {
                                try {
                                    await axios.delete(
                                        `https://api.escuelajs.co/api/v1/categories/${elm.id}`
                                    );
                                    console.log(
                                        "Resource deleted successfully"
                                    );

                                    const { data } = await axios.get(
                                        "https://api.escuelajs.co/api/v1/categories"
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
        "https://api.escuelajs.co/api/v1/categories"
    );

    return {
        props: {
            categories: data,
        },
    };
};
// useEffect(() => {async () => {
//                                                 try {
//                                                     await axios.delete(
//                                                         `https://api.escuelajs.co/api/v1/categories/${elm.id}`
//                                                     );
//                                                     console.log(
//                                                         "Resource deleted successfully"
//                                                     );

//                                                     const { data } = await axios.get(
//                                                         "https://api.escuelajs.co/api/v1/categories"
//                                                     );
//                                                     setarr(data);
//                                                 } catch (error) {
//                                                     console.error(error);
//                                                 }
//                                                  }}
//                                              }, [])
