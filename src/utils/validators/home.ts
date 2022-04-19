import * as Yup from 'yup';
import { translate } from '../../locales';

export const yupValidateHome = Yup.object()
  .shape({
    name: Yup.string().required(translate('validators.name.required')),
    email: Yup.string()
      .email(translate('validators.email.valid'))
      .required(translate('validators.email.required')),
  })
  .required();
