import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Flex } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import { translate } from '../../locales';

import { Input } from '../../components/Input';

import { yupValidateHome } from '../../utils/validators/home';
import { HomeForm } from '../../models/forms';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit: handleSubmitForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupValidateHome),
  });

  const handleSubmit = React.useCallback(
    (form: HomeForm) => {
      console.log(form);
      navigate('Details');
    },
    [navigate],
  );

  return (
    <Flex>
      <Box>{translate('home.box')}</Box>
      <Input
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        error={!!errors.name}
        messageError={errors.name && errors.name.message}
        placeholder={translate('fields.name')}
        name="name"
        control={control}
      />
      <Input
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        error={errors.email}
        messageError={errors.email && errors.email.message}
        placeholder={translate('fields.email')}
        name="email"
        control={control}
      />
      <Button
        colorScheme="success"
        onPress={handleSubmitForm(data => handleSubmit(data as HomeForm))}
      >
        {translate('home.button')}
      </Button>
    </Flex>
  );
};

export { Home };
