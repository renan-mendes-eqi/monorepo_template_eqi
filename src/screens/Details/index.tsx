import React from 'react';
import { Box } from 'native-base';

import { translate } from '../../locales';

const Details: React.FC = () => {
  return <Box>{translate('details.title')}</Box>;
};

export { Details };
