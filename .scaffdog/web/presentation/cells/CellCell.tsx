import { Box } from '@chakra-ui/react'
import type { Find{{ inputs.component | pascal }}Query, Find{{ inputs.component | pascal }}QueryVariables } from 'types/graphql'

import type { {{ inputs.component | pascal }}SuccessProps, {{ inputs.component | pascal }}FailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query Find{{ inputs.component | pascal }}Query($id: Int!) {
    {{ inputs.component | camel }}: {{ inputs.component | camel }}(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: {{ inputs.component | pascal }}FailureProps<Find{{ inputs.component | pascal }}QueryVariables>) => (
  <Box>Error: {error.message}</Box>
)

export const Success = ({
  {{ inputs.component | camel }},
}: {{ inputs.component | pascal }}SuccessProps<Find{{ inputs.component | pascal }}Query, Find{{ inputs.component | pascal }}QueryVariables>) => {
  return <Box>{JSON.stringify({{ inputs.component | camel }})}</Box>
}
