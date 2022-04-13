import { memo, VFC, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    onClick?: () => void;
}

export const SettingButton : VFC<Props> = memo( function ESsettingbutton(props){
  const {
    children,
    onClick
  } = props; 

  return(
    <Button
      color="White" 
      mt="5%"
      mr="10%"
      bg="blue.500"
      shadow="md"
      rounded={4}
      _hover={{ bg: 'blue.300' }}
      _focus={{outline: '0'}}
      onClick={onClick}
      >
        {children}
    </Button>
  );
});

