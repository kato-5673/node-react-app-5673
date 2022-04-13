import { Flex, Box, Heading, Link, Menu, MenuButton, IconButton, Spacer, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon,  } from '@chakra-ui/icons';
import { memo, VFC, useCallback } from "react";
import { useHistory } from 'react-router-dom';

export const Header : VFC = memo( function ESheader(){
  const history = useHistory();
  const onClickToppage = useCallback(() => history.push('/'),[]);
  const onClickquestionpage = useCallback(() => history.push('/question'),[]);
  const onClickquestiongraphpage = useCallback(() => history.push('/questiongraph'),[]);
  const onClickContactpage = useCallback(() => history.push('/contact'),[]);
  
  return(
    <Flex  padding={{ base: 3, md: 7 }}>
      <Flex
          align="center"
          mx={4}
          _hover={{ cursor: "pointer" }}
          as="a"
        >
          <Heading onClick={onClickToppage}  as="h1" fontSize={{ base: "md", md: "xl" }}>
            ザックリ健康チェッカー
          </Heading>
      </Flex>
      <Spacer /> 
      <Flex
          fontSize="md"
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={16} onClick={onClickquestionpage}>
            <Link>健康チェック</Link>
          </Box>
          <Box px={6} onClick={onClickquestiongraphpage}>
            <Link>みんなの統計</Link>
          </Box>
          <Box pl={16} onClick={onClickContactpage}>
            <Link>お問い合わせ</Link>
          </Box>
      </Flex>
      <Spacer /> 
      <Menu>
         <MenuButton
         display={{ base: "flex", md: "none" }}
         as={IconButton}
         aria-label='Options'
         icon={<HamburgerIcon />}
         variant='outline'
        />
         <MenuList>
          <MenuItem onClick={onClickquestionpage}>健康チェック</MenuItem>
          <MenuItem onClick={onClickquestiongraphpage}>みんなの統計</MenuItem>
          <MenuItem onClick={onClickContactpage}>お問い合わせ</MenuItem>
         </MenuList>
      </Menu> 
      </Flex>
  );
});

