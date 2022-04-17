import { Button } from "@chakra-ui/react";
import { ReactElement } from "react";

interface PrimaryButtonProps {
  text: string;
  icon?: ReactElement<any>;
}

export function PrimaryButton({text, icon}: PrimaryButtonProps) {
  return icon ? (
    <Button
      size="lg"
      bgColor="#6b63ff"
      _hover={{ bg: "#5149fb" }}
      rightIcon={icon}
    >
      {text}
    </Button>
  ) : (
    <Button
      size="lg"
      bgColor="#6b63ff"
      _hover={{ bg: "#5149fb" }}
    >
      {text}
    </Button>
  );
}
