import { Flex, Text, Button } from "@chakra-ui/react"
import { useSession, signOut } from "next-auth/react"
import { FiX } from "react-icons/fi"
import { NavBarSignInButton } from "./NavBarButton"

export function NavigationBar() {
  const { data: session } = useSession()
  let isUserLoggedIn = true
  return (
    <Flex
      boxShadow="sm"
      bgColor="white"
      align="center"
      justify="space-between"
      p="18px"
    >
      <Text>Dashboard</Text>
      {isUserLoggedIn && (
        <NavBarSignInButton session={session} />
      )}
    </Flex>
  );
}
