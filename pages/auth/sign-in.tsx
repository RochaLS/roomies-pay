import { Heading, Flex, Box, Button, Center } from '@chakra-ui/react'
import type { NextPage } from 'next/types'
import { useSession, signIn, } from "next-auth/react";
import Image from "next/image";

export const SignIn: NextPage = () => {
  const {data: session} = useSession();

  const handleSignin = (e: Event) => {
    e.preventDefault();
    signIn();
  };

  return (
    <Flex justify="center" align="center" h="100vh">
      <Box p={10} borderRadius="10px">
        <Center>
          <Image src="/images/login.svg" height="400" width="400" alt="Login" />
        </Center>
        <Heading size="xl">Sign In with your preferred social account</Heading>
        <Center m={12}>
          <Button size="lg" colorScheme="purple">
            Sign in with Google
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}


export default SignIn
