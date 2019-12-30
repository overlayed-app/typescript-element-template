import React from 'react'
import { injectableElement } from '@overlayed-app/loadable-element'

interface Props {
  noun: string
}

const Component: React.FC<Props> = (props: Props) => <h1>Hello {props.noun}</h1>

export default injectableElement(Component)
