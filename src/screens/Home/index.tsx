import React from 'react';
import { Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home(): JSX.Element {
  const navigation = useNavigation();

  return (
    <>
      <Box>Im in Home noww</Box>
      <Button
        colorScheme="success"
        onPress={() => navigation.navigate('Details')}
      >
        Go to Details
      </Button>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </>
  );
}
