import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch("https://fashion-shop-server.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    return { products, setProducts };
};
export default useProducts;
