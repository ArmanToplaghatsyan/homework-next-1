import { IProduct } from "@/type/type";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddProducts() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();

    const save = (data: IProduct) => {
        axios.get("https://api.escuelajs.co/api/v1/products");
        reset();
    };

    
    
    return (
        <div>
            <h2>Add Products</h2>

            <label>Title</label>
            <label>Price</label>
            <label>Description</label>
            <label>Categorie</label>
            
        </div>
    );
}
