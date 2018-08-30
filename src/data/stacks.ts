/* tslint:disable */
import { Stack } from '../types'

const data: Stack[] = [
  {
    title: 'React + VulcanJS',
    type: 'frontend',
    key: 'react-vulcanjs',
    images: [
      require('../assets/icons/react.svg'),
      require('../assets/icons/vulcan.svg'),
    ],
    content: {
      title: 'React + Relay',
      description:
        "Get started with React and Facebook's homegrown GraphQL client Relay on the frontend",
    },
    authorName: 'Sacha Greif',
    comingSoon: true,
  },
  {
    title: 'Expo + Apollo',
    type: 'frontend',
    key: 'expo-apollo',
    images: [
      require('../assets/icons/expo.svg'),
      require('../assets/icons/apollo.svg'),
    ],
    content: {
      title: 'Expo + Apollo',
      description:
        "Get started with React and Facebook's homegrown GraphQL client Relay on the frontend",
    },
    authorName: 'Brent Vatne',
    comingSoon: true,
  },
  {
    title: 'React + Apollo',
    type: 'frontend',
    key: 'react-apollo',
    images: [
      require('../assets/icons/react.svg'),
      require('../assets/icons/apollo.svg'),
    ],
    content: {
      title: 'React + Apollo',
      description:
        'Learn how to get started with React and Apollo Client on the frontend',
    },
    authorName: 'Nikolas Burk',
    beginnersChoice: true,
  },

  {
    title: 'Node.js',
    type: 'backend',
    key: 'graphql-js',
    images: [
      require('../assets/icons/nodejs.svg'),
      require('../assets/icons/graphql.svg'),
    ],
    content: {
      title: 'graphql.js',
      description:
        'Build your own GraphQL server with Node.js, graphql-yoga and Prisma',
    },
    authorName: 'Maira Bello',
    beginnersChoice: true,
  },
  {
    title: 'graphql-elixir',
    type: 'backend',
    key: 'graphql-elixir',
    images: [
      require('../assets/icons/elixir.png'),
      require('../assets/icons/graphql-elixir.svg'),
    ],
    content: {
      title: 'graphql-elixir',
      description:
        'Get started with GraphQL and Elixir by building your own server in this tutorial',
    },
    authorName: 'Ben Wilson',
    color2: '#4e2a8e',
  },
  {
    title: 'graphql-ruby',
    type: 'backend',
    key: 'graphql-ruby',
    images: [
      require('../assets/icons/ruby.svg'),
      require('../assets/icons/graphql-ruby.svg'),
    ],
    content: {
      title: 'graphql-ruby',
      description: 'Learn how to build a GraphQL server with Ruby',
    },
    authorName: 'Radoslav Stankov',
    color2: '#a5152a',
  },
  {
    title: 'graphql-java',
    type: 'backend',
    key: 'graphql-java',
    images: [
      require('../assets/icons/java.svg'),
      require('../assets/icons/graphql.svg'),
    ],
    content: {
      title: 'graphql-java',
      description:
        'Build your own GraphQL server with the Java programming language',
    },
    authorName: 'Bojan Tomic',
  },
  {
    title: 'graphql-python',
    type: 'backend',
    key: 'graphql-python',
    images: [
      require('../assets/icons/python.svg'),
      require('../assets/icons/graphene.svg'),
    ],
    content: {
      title: 'graphql-python',
      description:
        'Learn how to build your own GraphQL server with Python and the Graphene framework',
    },
    authorName: 'Jonatas Baldin',
    color2: '#db594c',
  },
  {
    title: 'GraphQL Scala',
    type: 'backend',
    key: 'graphql-scala',
    images: [require('../assets/icons/sangria.svg')],
    content: {
      title: 'Graphql Scala',
      description:
        'Build your own GraphQL server with the Scala programming language',
    },
    authorName: 'Mariusz Nosiński',
    darkenGreyLogo: true,
  }
]

export default data
