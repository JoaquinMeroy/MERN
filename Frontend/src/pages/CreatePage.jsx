import { useColorModeValue } from '@/components/ui/color-mode'
import { Toaster, toaster } from "@/components/ui/toaster"
import { useProductStore } from '@/store/productStore'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price:"",
    image:""
  })

  const {createProducts} = useProductStore();

  const handleAddProduct = async () => {
  const {success, message} =  await createProducts(newProduct)

  if (success) {
        toaster.create({
          title: "Success",
          description: "Product created successfully!",
          type: "success",
        });
      } else {
        toaster.create({
          title: "Error",
          description: message || "Failed to create product.",
          type: "error",
        });
      }

    console.log("Success: ",success)
    console.log("Message: ",message)
  }
  return (
    <>
      <Toaster />
      <Container maxW={Container.sm}>
        <VStack wordSpacing={8}>
          <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={"8px"}>Create Product</Heading>
          <Box w={"full"} bg={useColorModeValue("white","gray.900")} p={"6"} rounded={"lg"}>
            <VStack gap={"4"}>
              <Input placeholder='Product Name' name='name' value={newProduct.name} onChange={(e)=> setNewProduct({...newProduct, name: e.target.value})}>
              </Input>
              <Input placeholder='Product Price' type='number' name='price' value={newProduct.price} onChange={(e)=> setNewProduct({...newProduct, price: e.target.value})}>
              </Input>
              <Input placeholder='Product Image' name='image' value={newProduct.image} onChange={(e)=> setNewProduct({...newProduct, image: e.target.value})}>
              </Input>
              <Button colorPalette={"blue"} onClick={handleAddProduct} w={"full"}>Add</Button>
            </VStack>
          </Box>
        </VStack>
        </Container>
    </>
  )
}

export default CreatePage