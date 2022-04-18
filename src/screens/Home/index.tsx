import React from 'react';
import { Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <>
      <Box>Im in Home noww</Box>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </>
  );
}
