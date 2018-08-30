// NOTE might considere to move it in src/sata/config.ts

// 1. Introduction to Finance and systematic trading
// 2. Python and prog fundamentals
// 3. Bacltesting lab
// 3. Algorithms
// TODO merge with `src/data/stacks`
const tutorials = [
  {
    // step.basics
    category: 'Introduction',
    section: 'Trading Fundamentals',
    description: 'In the first chapter, you’ll learn about the core concepts of Quantitative Finance.',
    steps: [
      {
        title: 'Introduction',
      },
    ],
  },
  {
    // step.advanced
    category: 'Introduction',
    section: 'Advanced Finance (optional)',
    description: 'Next, you’ll learn about the advanced concepts of Quantitative Finance.',
  },
]

export default {
  project: 'Straders',
  // TODO there is also the overrideDescription
  description: 'Fullstack GraphQL Tutorial to go from zero to production covering all basics and advanced concepts.',

  github: 'https://github.com/xav-b/howtoquant',

  home: {
    title: 'Learn Systematic Trading',
    punchline: 'The free and open-source tutorial to learn all around Quantitative trading to go from zero to market.',
    videoLabel: 'Watch Overview',
    videoId: 'RomfTrm5_7g',
    ctaLabel: 'Start with Introduction',
  },

  tutorials: {
    leftCatch: 'Hands-on tutorials',
    rightButton: 'Choose your favorite path',
    content: tutorials,
  },

  build: {
    title: 'What you will build: A Trading Lab',
    subtitle: 'Start from scratch and build a fully-featured Hackernews clone with one of the detailed step-by-step tutorials. Use the programming language and framework of your choice!',
    bullets: [
      'Learn about best practices',
      'Detailed instructions & explanations',
      'From scratch to live stock market',
    ],
  },

  playground: {
    title: 'Bring engineering to your decisions',
    subtitle: 'Time to trade in the Playground...',
    api: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
    transition: 'That was easy, wasn\'t it?',
    cta: 'Learn how to optimize portfolios',
  },

  footer: {
    // TODO the text as well
    // NOTE author section?
    twitter: 'XavierBruhiere',
    website: 'http://xav-b.fr',
    // TODO create a community
    slack: '',
  },
}
