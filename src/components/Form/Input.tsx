import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import React from "react";

type InputProps = ChakraInputProps & {
  name: string;
  label: string;
}


export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='pink.500'
        bg='gray.900'
        variant='filled'
        size='lg'
        _hover={{
          bg: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  )
}