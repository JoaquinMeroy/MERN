import { Box, Heading, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    >
      <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'}/>

      <Box p={4}>
        <Heading as={h3} size={'md'} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={'red'} mb={4}>
          ${product.price}
        </Text>
        <HStack>
          {/* <IconButton _icon={<EditIcon/>} colorScheme={'blue'}/>
          <IconButton _icon={<DeleteIcon/>} colorScheme={'red'}/> */}
        </HStack>
      </Box>
    </Box>
  )
}
