import React from 'react';
import  "./Hero.css";
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'
const Hero = () => {
  return (
    <div className="mx-4 md:mx-8 xl:mx-48 mt-8 font-semibold hero-bg">
      <h1 className="text-xl md:text-2xl mb-4">What are you looking for?</h1>
      <InputGroup size="md">
        <Input
          pr={{ base: "3rem", md: "4.5rem" }}
          type="text"
          placeholder="Search products..."
        />
        {/* <InputRightElement width={{ base: "3rem", md: "6rem" }}>
          <Button h="1.8rem" size="md" className="rounded-full text-white search-button">
            Search
          </Button>
        </InputRightElement> */}
        <button className='bg-[#10847e] text-white rounded-lg p-2 ml-1'>
          Search
        </button>
      </InputGroup>
    </div>
  )
}

export default Hero

