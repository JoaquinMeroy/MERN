import { Button, Container, Flex, HStack, Text} from '@chakra-ui/react'
import { useColorMode } from "@/components/ui/color-mode"
import { FaRegPlusSquare } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router-dom';
import { LuMoon, LuSun } from "react-icons/lu"

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Container maxW={"1140px"} px={"4"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} flexDir={{base:"column", sm:"row"}}>
          <Text>
            <Link to={"/"}>
              Product Store 🛒
            </Link>
          </Text>
          <HStack wordSpacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button variant={"subtle"}>
                <FaRegPlusSquare/>
              </Button>
            </Link>
            <Button variant={"subtle"} onClick={toggleColorMode}>
              {colorMode === "light" ? <LuSun /> : <LuMoon />}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </div>
  )
}

export default Navbar