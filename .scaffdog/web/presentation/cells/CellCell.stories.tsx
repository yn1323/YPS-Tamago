import { Loading, Empty, Failure, Success } from './{{ inputs.component | pascal }}Cell'
import { standard } from './{{ inputs.component | pascal }}Cell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: '{{ inputs.path }}/{{ inputs.component | pascal }}Cell' }
