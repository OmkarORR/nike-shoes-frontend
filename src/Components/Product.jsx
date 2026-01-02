import { useState,useEffect } from "react"

export default function Product()
{

    const[product, setProduct] = useState([]);

    // Fetch data from API
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json()) 
        .then((data)=>{
            console.log(data);
            setProduct(data);
        }) 
        .catch((error)=>{
            console.log(error);
        })
    },[])


    return(
        <div className="Products">
               {
                product.map((Products)=>{
                    
                    return(
                    // <div className="prod-card">
                        <div className="product-card" key={Products.id}>
                            <div className="image-wrapper">
                                <img className="prod-img" src={Products.image} alt="product-image" />
                            </div>
                            <p>{Products.title}</p>
                            <p>MRP: {Products.price}</p>
                        {/* <button className="btn-buy">BUY</button> */}
                        </div>
                    // </div>
                    )
                })
               }
        </div>
    )
}