import React from 'react'
import Button from '../Button'
import Input from '../Input'
import { css, cx } from 'react-emotion'
import media from '../../css/breakpoints'

const inputStyle = css`
  background-color: #f9f9fa;
  border: 0;
  flex: 1 1 auto;
  color: #212121;
`
const formContStyle = css`
  max-width: 420px;
  margin: 0 auto;

  ${media.md2(css`
    margin: initial;
  `)};
`
const formStyle = css`
  border: 1px solid #212121;
  align-items: center;
  justify-content: space-between;
  max-width: 420px;
`
const btnStyle = css`
  color: #fff;
  flex: 1 1 auto;
  border-radius: 0;
`

function InputButtonGroup(props) {
  const {
    handleSubmit,
    inputValue,
    handleInputChange,
    customFormStyleClass,
  } = props

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={formContStyle}>
      <div className={cx('flex-row', formStyle, customFormStyleClass)}>
        <Input
          type="email"
          className={inputStyle}
          name="email"
          required
          placeholder="Enter your email"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button className={btnStyle} type="submit">
          Get Notified
        </Button>
      </div>
    </form>
  )
}

export default InputButtonGroup
