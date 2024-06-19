import Header from "./Header";
import threemen from '../Images/threemen.jpg';
import { UseProduct } from "./ProductContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Lheader from "./Lheader";
import { useNavigate } from "react-router-dom";
const LdashBoard = () => {

    let da1 = {
        height: "100vh",
        width: "100%",
        backgroundImage:
        `url(${threemen})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
    }

    const[products, setProducts] = useState([]);
    const[products1, setProducts1] = useState([]);
    const[prodCate, setProdCategory] = useState([]);
    const[categoryId, setCategory] = useState(0);
    const[all,setAll] = useState([]);
    
    const navigate = useNavigate();



    function fnGetProducts(){
        axios.get("http://localhost:5001/api/user/products")
        .then(res =>{
            console.log(res.data);
            if(res.data){
                if(Array.isArray(res.data)){
                    setProducts(res.data.slice(0,4));
                }else{
                    setProducts([res.data]);
                }
            }else{
                console.error('API response is null:', res.data);
            }
        })

        .catch(err => console.log(err))
    }


    function fnGetTrending(){
            axios.get("http://localhost:5001/api/user/products/trending")
            .then(res =>{
                console.log(res.data);
                if(res.data){
                    if(Array.isArray(res.data)){
                        setProducts1(res.data.slice(0,4));
                    }else{
                        setProducts1([res.data]);
                    }
                }else{
                    console.error('API response is null:', res.data);
                }
            })

    }


    const handleByCategory= (newCategoryId) =>{
        console.log(newCategoryId);
        setCategory(newCategoryId);
        console.log(categoryId);
        axios.get(`http://localhost:5001/api/user/products/c/${newCategoryId}`)
            .then(res =>{
                console.log(res.data);
                if(res.data){
                    if(Array.isArray(res.data)){
                        setProdCategory(res.data.slice(0,4));
                    }else{
                        setProdCategory([res.data]);
                    }
                }else{
                    console.error('API response is null:', res.data);
                }
            })

    }
    
    function fnGetAllProducts(){
        axios.get("http://localhost:5001/api/user/products")
            .then(res =>{
                console.log(res.data);
                if(res.data){
                    if(Array.isArray(res.data)){
                        setAll(res.data.slice(0,6));
                    }else{
                        setAll([res.data]);
                    }
                }else{
                    console.error('API response is null:', res.data);
                }
            })

    }

    
    const {setProduct} = UseProduct();

    const handleByProduct = (newProduct) =>{
        // console.log(newProductId);
        // setProductId(newProductId);
        console.log(newProduct)
        setProduct(newProduct);
        console.log(newProduct);
        navigate("/productpage")
    }

    

    useEffect(() => {
        //check if token is there or not..
        var token = localStorage.getItem("token");
        if (token == null) {
            navigate("/userlogin");
    
            return;
        }
    })

    useEffect(() =>{
        fnGetProducts();
   
    },[]);


    

return(
<div>
    <Lheader/>

    <div className="d1" style={da1}> .</div>
    <div className="b1">
        <button type="button" className="active" onClick={fnGetProducts}>NEW DROPS</button>
        <button type="button" onClick={fnGetTrending}>MOST TRENDING</button>
    </div>

    <div className="container">
    <div className="row r1">
        {products.map((prod, index) => (
            <div key={index} className="col-md-3 pd">
                <a onClick={() => handleByProduct(prod)}><img src={prod.image} alt={prod.name} /></a>
                <br />
                <p style={{fontWeight:'400'}}>{prod.name} &nbsp; <a ><i class="fa fa-heart icon"></i></a></p>
                
                <p>${prod.amount}</p>
                <p>Units Left: {prod.stock}</p>
                {/* <p style={{color:'red'}}><a  >Add to &nbsp;<i class="fa fa-opencart icon"></i></a></p> */}
            </div>
        ))}
        {products1.map((prod, index) => (
            <div key={index} className="col-md-3 pd">
                <a onClick={() => handleByProduct(prod.id)}><img src={prod.image} alt={prod.name} /></a>
                <br />
                <p style={{fontWeight:'400'}}>{prod.name}</p>
                <p>${prod.amount}</p>
                <p>Units Left: {prod.stock}</p>
            </div>
        ))}
    </div>
    </div>

    <div className="b1">
        <button type="button" className="active" onClick={() =>handleByCategory(1)}>Shirts</button>
        <button type="button" onClick={() =>handleByCategory(2)}>Jeans</button>
        <button type="button" onClick={() =>handleByCategory(3)}>Jackets</button>
        <button type="button" onClick={() =>handleByCategory(4)}>Shoes</button>
    </div>

    <div className="container">
        <div className="row r1">
        {prodCate.map((prod, index) => (
            <div key={index} className="col-md-3 pd">
                <a onClick={() => handleByProduct(prod.id)}><img src={prod.image} alt={prod.name} /></a>
                <br />
                <p style={{fontWeight:'400'}}>{prod.name}</p>
                <p>${prod.amount}</p>
                <p>Units Left: {prod.stock}</p>
            </div>
        ))}
        </div>
    </div>

    <div className="b1">
        <button type="button" onClick={fnGetAllProducts}>View All</button>
        
    </div>

    <div className="container">
        <div className="row r1">
        {all.map((prod, index) => (
            <div key={index} className="col-md-3 pd">
                <a onClick={() => handleByProduct(prod.id)}><img src={prod.image} alt={prod.name} /></a>
                <br />
                <p style={{fontWeight:'400'}}>{prod.name}</p>
                <p>${prod.amount}</p>
                <p>Units Left: {prod.stock}</p>
            </div>
        ))}
        </div>
    </div>
    

</div>
)
}
export default LdashBoard;