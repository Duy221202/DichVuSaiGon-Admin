// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth, value, content, unit } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColor}
            fontSize={{
              base: "xl",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
          {growth !== undefined ? (
            <Flex align="center">
              <Text
                color={growth >= 0 ? "green.500" : "red.500"} // Màu thay đổi theo giá trị growth
                fontSize="md"
                fontWeight="700"
                me="5px"
              >
                {growth > 0 ? `+${growth} ${unit}` : `${growth} ${unit}`}{" "}
                {/* Hiển thị dấu + nếu growth > 0 */}
              </Text>
              <Text color={textColor} fontSize="md" fontWeight="400">
                {content}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
