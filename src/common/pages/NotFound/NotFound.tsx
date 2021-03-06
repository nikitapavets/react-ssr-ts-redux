import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { NotFound, NotFoundTitle } from '@common/pages/NotFound/NotFound.styled';

const NotFoundComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NotFound>
      <Helmet title={t('general:notFound')} />
      <NotFoundTitle>{t('general:notFound')}</NotFoundTitle>
    </NotFound>
  );
};

export default {
  component: NotFoundComponent,
};
