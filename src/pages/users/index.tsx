import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text } from '@chakra-ui/react';
import { RiAddLine, RiDeleteBin7Line, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'  >Usuários</Heading>
            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='blue'
              leftIcon={<Icon as={RiAddLine} fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' widht='8'>
                  <Checkbox colorScheme='blue' />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th width='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Sousa do Nascimento</Text>
                    <Text fontSize='sm' color='gray.300'>sousa_raf@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='pink.500' as={RiPencilLine} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='red' as={RiDeleteBin7Line} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Sousa do Nascimento</Text>
                    <Text fontSize='sm' color='gray.300'>sousa_raf@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='pink.500' as={RiPencilLine} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='red' as={RiDeleteBin7Line} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />

                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox colorScheme='blue' />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Rafael Sousa do Nascimento</Text>
                    <Text fontSize='sm' color='gray.300'>sousa_raf@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='pink.500' as={RiPencilLine} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />
                  <Button
                    as='a'
                    size='sm'
                    fontSize='sm'
                    colorScheme='transparent'
                    leftIcon={<Icon color='red' as={RiDeleteBin7Line} fontSize='20' />}
                    _hover={{
                      cursor: 'pointer'
                    }}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>

      </Flex>
    </Box>
  )
}