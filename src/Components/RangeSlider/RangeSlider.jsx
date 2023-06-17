import { useState } from "react";
import { RangeSlider,RangeSliderTrack,RangeSliderFilledTrack,RangeSliderThumb, Box, Text } from "@chakra-ui/react";

const RangeSliderComponent=()=> {

  const [value, setValue] = useState([0, 1000]);
  const [leftValue, rightValue] = value;

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="w-56" position="relative">
      <RangeSlider
        defaultValue={value}
        min={0}
        max={300}
        step={30}
        onChange={handleSliderChange}
      >
        <RangeSliderTrack bg="red.100">
          <RangeSliderFilledTrack bg="tomato" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Box position="absolute" top="-20px" left="0" width="100%" textAlign="center">
        <Text>{leftValue}</Text>
        <Text>{rightValue}</Text>
      </Box>
    </Box>
  );
}

export default RangeSliderComponent;
