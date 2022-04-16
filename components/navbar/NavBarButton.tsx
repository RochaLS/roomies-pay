import { Button } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { FiX } from "react-icons/fi"

interface NavBarSignInButtonProps {
  session: Session | null
}

export function NavBarSignInButton({ session }: NavBarSignInButtonProps) {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}
      size="md"
      bgColor="#6C63FF"
      _hover={{ bg: "#5149fb" }}
      rightIcon={<FiX size="1.2em" />}
    >
      {session?.user?.name}
    </Button>
  );

}
