import React from 'react';

import { Box, Button, Flex } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { translate } from '../../locales';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Flex>
      <Box>{translate('home.box')}</Box>
      <Button colorScheme="success" onPress={() => navigate('Details')}>
        {translate('home.button')}
      </Button>
    </Flex>
  );
};

export { Home };
