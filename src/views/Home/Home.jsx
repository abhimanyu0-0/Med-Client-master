import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Question from '../../Components/Question/Question';
import Tags from '../../Components/Tags/Tags';
import ProductByCategory from '../../Components/ProductByCategory/ProductByCategory';
import NewProducts from '../../Components/NewProducts/NewProducts';
import Features from '../../Components/Features/Features';
import CategoryList from '../../Components/Category/Category';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  
  return (
    <div>
        
        <div className='mx-12'>
        <Hero />
        <Tags />
        <CategoryList />
        <ProductByCategory />
        <Features />
        <NewProducts />
        <Question />
        </div>
    </div>
  )
}

export default Home