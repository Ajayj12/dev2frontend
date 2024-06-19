import { useEffect, useState } from "react";
import { UseProduct } from "./ProductContext";
import axios from "axios";
import Lheader from "./Lheader";
import { useNavigate } from "react-router-dom";


const ProductPage = () => {

    const { product } = UseProduct();
    const [productDetails, setProductDetails] = useState([]);
    const navigate = useNavigate();
    const[productId,setProductId] = useState();
    
    var CusId = localStorage.getItem("id")
    var token = "Bearer " + localStorage.getItem("token")
    

    useEffect(() => {
        //check if token is there or not..
        var token = localStorage.getItem("token");
        if (token == null) {
            navigate("/login");
    
            return;
        }
    },[])

    useEffect(() => {
        if (product) {
            axios.get(`http://localhost:5001/api/user/products/${product.id}`,{ headers: { 'Authorization': token } })
                .then(res => {
                    console.log(res.data);
                    if (res.data) {
                        setProductDetails([res.data]);
                    } else {
                        console.error('API response is null:', res.data);
                    }
                })
        }
    },[product])

    function fnAddtoCart(){
        
        const config = { headers: { "Authorization": token } }
        const data = {
            "customerId": CusId, // Replace with the actual customer ID
            "product": {
              "id": product.id
            },
            "quantity": 1 // Replace with the actual quantity
          };
    
        console.log(product.id);
        axios.post("http://localhost:5001/api/user/addCart", data, config)
            .then(res=>{

                alert("Product added to cart successfully");
                console.log(data)
                
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                  console.error("Unauthorized access");
                  // handle unauthorized access error
                } else {
                  console.error("Error:", error);
                }
              });
            
    }


    return (
        <div>
            <Lheader />
            <div className="container">
                <div className="row r2">
                    {productDetails.map((prod, index) => (
                        <div key={index} className="col-md-3 pd">
                            <img src={prod.image} alt={prod.name} />
                            <br />

                        </div>
                    ))}
                    {productDetails.map((prod ,index) => (
                        <div key={index} className="col-md-6 pf">
                            <p><b>{prod.name} &nbsp; <a ><i class="fa fa-heart icon"></i></a></b></p>
                            <p>Classic Black Shirt

Elevate your wardrobe with this timeless black shirt, designed for both style and comfort. Crafted from high-quality, breathable cotton fabric, this shirt ensures a perfect fit and all-day wearability. Featuring a sleek, modern cut, it boasts a button-down front, a crisp collar, and neatly tailored cuffs. </p>

                            
                            <p style={{textDecoration:"line-through"}}><i>$8999  </i></p>
                            <p><b>${prod.amount} &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 50% Off</b></p>
                            <p>Units Left: {prod.stock}</p>
                            <p style={{ color: "red" }}><a onClick={fnAddtoCart}>Add to &nbsp;<i class="fa fa-opencart icon"></i></a> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                            &nbsp; &nbsp; <a href="placeorder">Buy Now</a>
                             </p>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;