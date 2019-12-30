import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { includeCommonTests } from '@overlayed-app/loadable-element-tests'
import Component from '../component'

includeCommonTests(Component)

test('renders expected heading', () => {
  const { getByRole } = render(
    React.createElement(Component(React, React.version), { noun: 'world' })
  )
  const textElement = getByRole('heading')
  expect(textElement).toBeInTheDocument()
  expect(textElement).toHaveTextContent('Hello world')
})
