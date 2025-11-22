import React, {useEffect,useState } from 'react'
import { useProductStore } from '@/store/productStore'
import { useColorModeValue } from '@/components/ui/color-mode'  // Add this!
import { 
  Container, 
  VStack, 
  Heading, 
  SimpleGrid, 
  Box, 
  Image, 
  Text, 
  Button,
  HStack,
  Input
} from '@chakra-ui/react'

const HomePage = () => {
  const {products, fetchProducts, updateProduct, deleteProduct } =useProductStore();

  const [editingId, setEditingId] = useState(null);                           
  const [editForm, setEditForm] = useState({ name: "", price: "", image: "" }); 
    const bgColor = useColorModeValue("white", "gray.800");


  useEffect(()=>{
    fetchProducts()
  }, [fetchProducts])

  const handleEdit = (product) => {
    setEditingId(product._id);
    setEditForm({
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  const handleCancel = () => {
    setEditingId(null);
  }

  const handleSave = async (pid) =>{
    await updateProduct(pid, editForm);
    setEditingId(null);
  }

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    
    if (success) {
      console.log("Deleted!");
    } else {
      console.log("Error:", message);
    }
  }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Our Products
        </Heading>

        {products.length === 0 ? (
          <Text fontSize="xl" color="gray.500">
            No products found. Create one!
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} w="full">
            {products.map((product) => (
              <Box
                key={product._id}
                bg={bgColor}
                rounded="lg"
                shadow="md"
                overflow="hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  h="200px"
                  w="full"
                  objectFit="cover"
                />
                <Box p={4}>
                  
                  {/* EDIT MODE */}
                  {editingId === product._id ? (
                    <VStack gap={2}>
                      <Input
                        value={editForm.name}
                        onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                        placeholder="Product Name"
                      />
                      <Input
                        value={editForm.price}
                        onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                        placeholder="Price"
                        type="number"
                      />
                      <Input
                        value={editForm.image}
                        onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                        placeholder="Image URL"
                      />
                      <HStack w="full">
                        <Button colorPalette="green" size="sm" onClick={() => handleSave(product._id)}>
                          Save
                        </Button>
                        <Button colorPalette="gray" size="sm" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </HStack>
                    </VStack>
                  ) : (
                    /* DISPLAY MODE */
                    <>
                      <Heading as="h3" size="md" mb={2}>
                        {product.name}
                      </Heading>
                      <Text fontSize="xl" fontWeight="bold" color="blue.500">
                        ${product.price}
                      </Text>
                      <HStack mt={4} spacing={2}>
                        <Button colorPalette="blue" size="sm" onClick={() => handleEdit(product)}>
                          Edit
                        </Button>
                        <Button colorPalette="red" size="sm" onClick={() => handleDelete(product._id)}>
                          Delete
                        </Button>
                      </HStack>
                    </>
                  )}

                </Box>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage