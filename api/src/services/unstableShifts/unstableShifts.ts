import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const unstableShifts: QueryResolvers['unstableShifts'] = () => {
  return db.unstableShift.findMany()
}

export const unstableShift: QueryResolvers['unstableShift'] = ({ id }) => {
  return db.unstableShift.findUnique({
    where: { id },
  })
}

export const createUnstableShift: MutationResolvers['createUnstableShift'] = ({
  input,
}) => {
  return db.unstableShift.create({
    data: input,
  })
}

export const updateUnstableShift: MutationResolvers['updateUnstableShift'] = ({
  id,
  input,
}) => {
  return db.unstableShift.update({
    data: input,
    where: { id },
  })
}

export const deleteUnstableShift: MutationResolvers['deleteUnstableShift'] = ({
  id,
}) => {
  return db.unstableShift.delete({
    where: { id },
  })
}
