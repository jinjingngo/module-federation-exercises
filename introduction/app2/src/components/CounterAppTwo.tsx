import React, {useState} from 'react';
import {Button, Flex, Text} from '@chakra-ui/react';

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>App 2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </Button>
    </Flex>
  );
};

export default Counter;
