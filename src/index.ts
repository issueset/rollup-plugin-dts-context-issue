import { Context as ReactContext } from 'react'

export type Options<Context extends object> = [
  DefaultContext: ReactContext<Context | null>
]

export function fn() {
  console.log(123)
}
