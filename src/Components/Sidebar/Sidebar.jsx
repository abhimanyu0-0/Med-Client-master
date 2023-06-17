import { React, useState } from "react";
import { Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../store/FilterSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log(value,"value");
    dispatch(updateFilter(value))
  };

  return (
    <div className="w-64 border-r-2">
      <aside>
        <div className="flex flex-row m-4 justify-around">
          <div className="text-2xl">Filters</div>
          <div>
            <Button colorScheme="green">Clear</Button>
          </div>
        </div>
        <div className="w-56 m-4">
          <h3 className="text-lg font-bold mb-4">Price</h3>
          <RangeSlider
            aria-label={["min", "max"]}
            colorScheme="green"
            defaultValue={[10, 80]}
            onChangeEnd={(value)=>{handleChange(value)}}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <div className="flex justify-between">
            <p className="font-semibold">$0</p>
            <p className="font-semibold">$1000</p>
          </div>
        </div>

        <div className="m-4">
          <h3 className="text-lg font-bold mb-4">Category</h3>
          <RadioGroup defaultValue="1">
            <Stack spacing={1} direction="column">
              <Radio className="my-2" colorScheme="green" value="1">
                Opioids
              </Radio>
              <Radio className="my-2" colorScheme="green" value="2">
                Psychedelics
              </Radio>
              <Radio className="my-2" colorScheme="green" value="3">
                Cannabinoids
              </Radio>
              <Radio className="my-2" colorScheme="green" value="4">
                Research Chemical
              </Radio>
              <Radio className="my-2" colorScheme="green" value="5">
                Weigth Loss/ Diabetes
              </Radio>
              <Radio className="my-2" colorScheme="green" value="6">
                Gummies and Chocolates
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
