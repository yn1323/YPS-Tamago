import { atom } from 'recoil'

export type {{ inputs.name | pascal }} = typeof default{{ inputs.name | camel }}

const default{{ inputs.name | pascal }} = {
  jwt: '',
  userId: '',
}

export const {{ inputs.name | camel }}State = atom<{{ inputs.name | pascal }}>({
  key: '{{ inputs.name | camel }}',
  default: default{{ inputs.name | pascal }},
})
