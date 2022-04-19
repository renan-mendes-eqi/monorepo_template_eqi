import React from 'react';
import {
  Input as NativeBaseInput,
  WarningOutlineIcon,
  Box,
  Text,
  IInputProps,
} from 'native-base';

import { Control, Controller } from 'react-hook-form';

interface ITextInput extends IInputProps {
  error?: boolean;
  messageError?: string;
  control: Control;
  name: string;
}

export const Input: React.FC<ITextInput> = ({
  error,
  messageError,
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, onBlur } }) => (
        <Box>
          <NativeBaseInput
            {...rest}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
          {error && (
            <Box alignItems="center" flexDirection="row" pl={1}>
              <WarningOutlineIcon size="xs" color="red.400" />
              <Text pl={2} color="red.400">
                {messageError}
              </Text>
            </Box>
          )}
        </Box>
      )}
    />
  );
};
