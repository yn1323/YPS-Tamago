import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

// export const parameters = {
//   options: {
//     storySort: {
//       order: [''],
//     },
//   },
// }

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
