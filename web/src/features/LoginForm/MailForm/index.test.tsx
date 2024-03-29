import { composeStories } from '@storybook/testing-react'

import { screen } from '@redwoodjs/testing/web'

import { render } from 'src/config/jest-utils'

import * as stories from './index.stories'

const { Login, Register, PasswordReset, PasswordSet } = composeStories(stories)

describe('ログイン', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<Login />)
    }).not.toThrow()
  })
  it('ランドマークロールが存在する', () => {
    render(<Login />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
  it('input表示', () => {
    render(<Login />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(2)

    const email = textboxes.find(elem => elem.id === 'email')
    const password = textboxes.find(elem => elem.id === 'password')
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toHaveAttribute('maxLength', '64')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toHaveAttribute('maxLength', '16')
    expect(password).toBeEnabled()
    expect(password).toHaveAttribute('aria-describedby', 'password-helptext')
    expect(
      screen.getByText('8文字以上16文字以内で入力してください')
    ).toBeInTheDocument()
  })
  it('ボタン表示', () => {
    render(<Login />)
    expect(screen.getByText('メールアドレスでログイン')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<Login />)
    expect(screen.getByText('新規登録')).toBeInTheDocument()
    expect(screen.getByText('パスワードを忘れた方')).toBeInTheDocument()
    expect(
      screen.getByText('新規登録').getAttribute('href').split('?')[0]
    ).toEqual('/login/register')
    expect(screen.getByText('パスワードを忘れた方')).toHaveAttribute(
      'href',
      '/login/reset'
    )
  })
})

describe('新規登録', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<Register />)
    }).not.toThrow()
  })
  it('input表示', () => {
    render(<Register />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(2)
    const email = textboxes.find(elem => elem.id === 'email')
    const password = textboxes.find(elem => elem.id === 'password')
    expect(email).toHaveAttribute('type', 'email')
    expect(password).toHaveAttribute('type', 'password')
    expect(password).toBeEnabled()
  })
  it('ボタン表示', () => {
    render(<Register />)
    expect(screen.getByText('登録する')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<Register />)

    expect(screen.getByText('パスワードを忘れた方')).toBeInTheDocument()
    expect(screen.getByText('ログイン画面に戻る')).toBeInTheDocument()
    expect(screen.getByText('パスワードを忘れた方')).toHaveAttribute(
      'href',
      '/login/reset'
    )
    expect(screen.getByText('ログイン画面に戻る')).toHaveAttribute(
      'href',
      '/login'
    )
  })
})

describe('パスワードリセットURLの送信', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<PasswordReset />)
    }).not.toThrow()
  })
  it('input表示', () => {
    render(<PasswordReset />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(1)
    expect(textboxes.find(elem => elem.id === 'email').id).toEqual('email')
    const email = textboxes.find(elem => elem.id === 'email')
    expect(email).toHaveAttribute('type', 'email')
  })
  it('ボタン表示', () => {
    render(<PasswordReset />)
    expect(screen.getByText('パスワードリセット')).toBeInTheDocument()
  })
  it('別formへのリンク', () => {
    render(<PasswordReset />)
    expect(screen.getByText('ログイン画面に戻る')).toBeInTheDocument()
    expect(screen.getByText('ログイン画面に戻る')).toHaveAttribute(
      'href',
      '/login'
    )
  })
})

describe('パスワード再登録', () => {
  it('コンポーネントを正常に描画', () => {
    expect(() => {
      render(<PasswordSet />)
    }).not.toThrow()
  })
  it('input表示', () => {
    render(<PasswordSet />)
    const textboxes = screen.queryAllByRole('textbox')
    expect(textboxes.length).toEqual(1)
    expect(textboxes.find(elem => elem.id === 'password').id).toEqual(
      'password'
    )
    const password = textboxes.find(elem => elem.id === 'password')
    expect(password).toHaveAttribute('type', 'password')
  })
  it('ボタン表示', () => {
    render(<PasswordSet />)
    expect(screen.getByText('パスワードを再設定')).toBeInTheDocument()
  })
})
