import { memo, VFC} from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

type Props = {
    onClick?: () => void;
}

export const BackIconButton : VFC<Props> = memo( function ESbackiconbutton(props){
  const {
    onClick
  } = props; 

  return(
    <Icon
     h={10}  
     rounded="full" 
     as={IconButton} 
     variant='outline' 
     icon={<ChevronLeftIcon h={[5, 10]} w={[5, 10]} onClick={onClick}/>}>
    </Icon>
  );
});
