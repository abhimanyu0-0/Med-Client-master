import React, { useEffect,useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Product from '../../Components/Product/Product';
import { Provider, useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import store from '../../store/store';

const Category = () => {
    const [data, setData] = useState([]);
    const[priceLow, setPriceLow]= useState(10);
    const[priceHigh, setPriceHigh] = useState(1000);
    const filterValue = useSelector((state)=>state)
  // console.log(filterValue, "filterValue");

    const {category} = useParams();
    useEffect(() => {
      axios
        .get(`https://med-server-production.up.railway.app/api/products/all?category=${category}`)
        .then((response) => {
          setData(response.data);
            console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    useEffect(()=>{
      if(filterValue){
        const plow = filterValue.filter[0];
        const phigh = filterValue.filter[1];
        setPriceHigh(phigh)
        setPriceLow(plow)
        // if()
        console.log(priceHigh,"priceHigh")
      }
    })

    const dispatch = useDispatch();
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <Provider store ={store}>
    <div className='flex pt-4'>
        <Sidebar />
        <div className='m-4'>
        <h3 className='font-semibold text-3xl '>Products</h3>
        <div className='flex flex-wrap'>
        
        {data.map((item,key) => (
          <>
          {/* {console.log(data,"data")} */}
          {item.price<=priceHigh && item.price>=priceLow ? (
            <Product
              id={item._id}
              key={key}
              imageUrl={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
              discount={item.Discount}
              category={item.category}
              product={item}
              handleAddToCart={()=>handleAddToCart(item)}
            />
            ): (
            <div>
              Nothing to show
            </div>)}
           </> 
          ))}
        </div>
        
        </div>
        
    </div>
    </Provider>
  )
}

export default Category