import { memo, VFC} from "react";
import { IconButton, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  
    onClick?: () => void;
}
// eslint-disable-next-line react/display-name
export const NextIconButton : VFC<Props> = memo( function ESnextIconButton(props){
  const {
    onClick
  } = props;

  return(
    <Icon
     h={10}  
     rounded="full" 
     as={IconButton} 
     variant='outline' 
     icon={<ChevronRightIcon h={[5, 10]} w={[5, 10]} onClick={onClick}/>}>
    </Icon>
  );
});

