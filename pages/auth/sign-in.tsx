import { Heading, Flex, Box, Button, Center } from '@chakra-ui/react'
import type { NextPage } from 'next/types'
import { useSession, signIn, signOut, } from "next-auth/react";
import Image from "next/image";
import { SignInButton } from '../../components/signIn/SignInButton';

export const SignIn: NextPage = () => {
  const {data: session} = useSession();
  console.log(session)

  return (
    <Flex justify="center" align="center" h="100vh">
      <Box p={10} borderRadius="10px">
        <Center>
          <Image src="/images/login.svg" height="400" width="400" alt="Login" />
        </Center>
        <Heading size="xl">Sign in with your preferred social account</Heading>
        <Center m={12}>
          {!session && (
            <SignInButton/>
          )}
        </Center>
      </Box>
    </Flex>
  );
}


export default SignIn
