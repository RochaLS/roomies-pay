import type { NextPage } from 'next'
import { NavigationBar } from '../components/navbar/NavigationBar'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Avatar,
  AvatarGroup,
  Heading,
  Button,
  Flex,
} from '@chakra-ui/react'
import { FiPlusCircle } from "react-icons/fi";
import { useSession } from 'next-auth/react'

import Image from "next/image"
import { PrimaryButton } from '../components/PrimaryButton'


const Home: NextPage = () => {
  const { data: session } = useSession()
  console.log(session?.user?.image)
  return (
    <>
      <NavigationBar />
      <Heading m="50px" textAlign="center">
        Expenses Overview
      </Heading>
      <Box mr="12%" ml="12%" mb="12%">
        <TableContainer
          bgColor="white"
          p="20px"
          boxShadow="sm"
          borderRadius="10px"
        >
          <Table variant="simple" size="lg">
            <Thead>
              <Tr>
                <Th>Bought by</Th>
                <Th>Item</Th>
                <Th>Cost</Th>
                <Th>Splitted between</Th>
                <Th>Final Cost</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
              <Tr>
                <Td>Lucas Rocha</Td>
                <Td>Fresh Prep</Td>
                <Td>$94.00</Td>
                <Td>
                  <AvatarGroup>
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                    <Avatar name="Lucas Rocha" src={session?.user?.image!} />
                  </AvatarGroup>
                </Td>
                <Td>$47.00</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Flex mt="20px" mr="10px" justify="flex-end">
          <PrimaryButton text="Add Item" icon={<FiPlusCircle size="1.2em" />} />
        </Flex>
      </Box>
    </>
  );
}

export default Home
