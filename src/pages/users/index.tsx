import { Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, Spinner } from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiDeleteBin7Line, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query'

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('https://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users;
  })

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'  >Usuários</Heading>
            <Link href='users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='blue'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex align="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Error</Text>
            </Flex>
          ) : (
            <>
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
                  {data.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td>
                          <Checkbox colorScheme='blue' />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight='bold'>{user.name}</Text>
                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                          </Box>
                        </Td>
                        <Td>{user.createdAt}</Td>
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
                    )
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}


        </Box>

      </Flex>
    </Box>
  )
}