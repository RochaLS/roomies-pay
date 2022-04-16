import { signIn } from "next-auth/react"
import { Button } from "@chakra-ui/react";

export function SignInButton() {

  return (
    <Button
      onClick={() => {
        signIn("google", {
          callbackUrl: "/",
        });
      }}
      size="lg"
      bgColor="#6b63ff"
      _hover={{ bg: "#5149fb" }}
    >
      Sign in with Google
    </Button>
  )

}
