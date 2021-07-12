import NextLink from 'next/link';
import { useState } from 'react';
import {
  Box, Flex, Heading, Button, Icon, Table, Thead, Tbody, Tr, Th, Td,
  Checkbox, Text, Spinner, Link
} from '@chakra-ui/react';
import { RiAddLine, RiDeleteBin7Line, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';
import { useUsers } from '../../services/hooks/useUsers';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';


export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(page)

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`)

      return response.data;
    }, {
      staleTime: 1000 * 60 * 10, //10 minutos
    })
  }

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal'  >
              Usuários
              {!isLoading && isFetching && <Spinner />}
            </Heading>
            <NextLink href='users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='blue'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </NextLink>
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
                  {data.users.map(user => {
                    return (
                      <Tr key={user.id}>
                        <Td>
                          <Checkbox colorScheme='blue' />
                        </Td>
                        <Td>
                          <Box>
                            <Link
                              color='purple.400'
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight='bold'>{user.name}</Text>
                            </Link>
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
                            leftIcon={
                              <Icon color='pink.500' as={RiPencilLine} fontSize='20' />
                            }
                            _hover={{
                              cursor: 'pointer'
                            }}
                          />
                          <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='transparent'
                            leftIcon={
                              <Icon color='red' as={RiDeleteBin7Line} fontSize='20' />
                            }
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}