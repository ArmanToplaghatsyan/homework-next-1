"use client";

import { ICategory } from "@/type/type";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddCategories() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ICategory>();

    const save = (data: ICategory) => {
        axios.get("https://api.escuelajs.co/api/v1/categories");
        reset();
    };

    return (
        <div>
            <h2>Add Categories</h2>
            <form onSubmit={handleSubmit(save)}>
                <label>Name</label>
                <input
                    placeholder="name..."
                    {...register("name", { required: "Enter name" })}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <label>Iamge</label>
                <input
                    placeholder="image..."
                    {...register("image", { required: "Enter image" })}
                />
                {errors.image && <p>{errors.image.message}</p>}
                <button>Save</button>
            </form>
        </div>
    );
}
