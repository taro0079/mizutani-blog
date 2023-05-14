"use client"

import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react"
import Link from "next/link"
import { FC } from "react"

const Header: FC = () => {
  return (
    <Box bgColor="gray.100" px={4} py={2}>
      <Container maxW="full" justifySelf="flex-start">
        <Heading as="h1" fontSize="2xl" cursor="pointer">
          First Blog
        </Heading>
      </Container>
    </Box>
  )
}

export default Header
