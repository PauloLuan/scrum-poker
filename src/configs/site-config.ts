const baseUrl = 'http://scrum-poker.vercel.app'

const siteConfig = {
  copyright: `Copyleft © ${new Date().getFullYear()} Scrum Poker  .`,
  author: {
    name: 'Scrum Poker  ',
    github: 'https://github.com/gswsoftware',
    linkedin: 'https://linkedin.com/in/gsw',
    email: ''
  },
  youtube: '',
  seo: {
    title: 'Scrum Poker ',
    titleTemplate: '%s - Scrum Poker  ',
    description:
      'Scrum Poker',
    siteUrl: `${baseUrl}`,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${baseUrl}`,
      title: 'Scrum Poker ',
      description:
        'Scrum Poker   ',
      site_name:
        'Scrum Poker  ',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1240,
          height: 480,
          alt: 'Scrum Poker '
        },
        {
          url: `${baseUrl}/twitter-og-image.png`,
          width: 1012,
          height: 506,
          alt: 'Scrum Poker '
        }
      ]
    }
  }
}

export default siteConfig
