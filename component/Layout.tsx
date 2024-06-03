import { ICategory, IProduct } from "@/type/type";
import axios from "axios";
import Link from "next/link";

export default function Layout({ children }: any) {
    return (
        <div>
            <nav>
                <ul>
                 
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                 
                    <li>
                        <Link href={"/Products"}>Show Product</Link>
                    </li>
                    <li>
                        <Link href={"/AddProducts/"}>Add Products</Link>
                    </li>
                    <li>
                        <Link href={"/Categories"}>Show Categories</Link>
                    </li>
                    <li>
                        <Link href={"/AddCategories"}>Add Categories</Link>
                    </li>
                </ul>
            </nav>

            <div>{children}</div>
        </div>
    );
}
