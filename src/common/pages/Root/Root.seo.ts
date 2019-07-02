import i18next from 'i18next';

const seo = (t: i18next.TFunction) => ({
  defaultTitle: t('general:appTitle'),
  titleTemplate: t('general:appTitleTemplate'),
  meta: [
    {
      name: 'description',
      content: t('general:appDescription'),
    },
    {
      property: 'og:title',
      content: t('general:appTitle'),
    },
    {
      property: 'og:description',
      content: t('general:appDescription'),
    },
    {
      property: 'og:url',
      content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
    },
    // {
    //   property: 'og:image',
    //   content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
    // },
    {
      name: 'twitter:title',
      content: t('general:appTitle'),
    },
    {
      name: 'twitter:description',
      content: t('general:appDescription'),
    },
    {
      name: 'twitter:url',
      content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
    },
    // {
    //   name: 'twitter:image',
    //   content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
    // },
  ],
});

export default seo;
