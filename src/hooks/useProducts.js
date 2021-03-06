import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(() => {
        fetch('https://enigmatic-gorge-89531.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);
    return { products, setProducts }
}
export default useProducts;