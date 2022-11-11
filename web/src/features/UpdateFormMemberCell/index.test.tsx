import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import { standard } from './index.mocks'
import * as stories from './index.stories'
import { Loading, Empty, Failure, Success } from '.'

const { loading, empty, failure, success } = composeStories(stories)

describe('UpdateFormMemberCell', () => {
  it('ローディングが描画される', () => {
    expect(() => {
      render(<loading />)
    }).not.toThrow()
  })

  it('空の結果が描画される', async () => {
    expect(() => {
      render(<empty />)
    }).not.toThrow()
  })

  it('失敗時に描画される', async () => {
    expect(() => {
      render(<failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

  it('成功時に描画される', async () => {
    expect(() => {
      render(<success updateFormMember={standard().updateFormMember} />)
    }).not.toThrow()
    expect(screen.getByText('Foobar')).toBeInTheDocument()
  })
  it('ボタンが存在する', () => {
    render(<success updateFormMember={standard().updateFormMember} />)
    expect(screen.getByText('マイページ')).toBeInTheDocument()
  })
  // it('メニューが閉じているときにボタンのラベルが非表示', async () => {
  //   const { container } = render(<success updateFormMember={standard().updateFormMember} />)
  //   await LabelHidden.play({ canvasElement: container })
  // })
})
