import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Rafael Sousa</Text>
        <Text color='gray.300' fontSize='small'>sousa_raf@hotmail.com</Text>
      </Box>
      <Avatar size='md' name='Rafael' src='https://github.com/rafael346.png' />
    </Flex>
  )
}