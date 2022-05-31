import React, { useState } from 'react'
import './Calculator.css'
import { Box, Container } from '@mui/material'

const calcDisplay = document.getElementById('display')

export default function Calculator() {
  const [num, setNum] = useState(0)
  const [operator, setOperator] = useState(null)
  const [operand1, setOperand1] = useState(null)
  const [operand2, setOperand2] = useState(null)

  function inputNum(e) {
    const value = num == 0 ? e.target.value : num + e.target.value
    setNum(value)
  }

  function clear() {
    setNum(0)
  }

  function percentage() {
    setNum(num / 100)
  }

  function changeSign() {
    setNum(num * -1)
  }

  function operatorHandler(e) {
    console.log(num, e.target.value)
    setOperand1(num)
    setOperator(e.target.value)
    setNum(0)
  }

  function calculate(e) {
    console.log('calculando...')

    if ((operand1 === null) & (operand2 === null)) {
      setOperand1(parseFloat(num))
      return
    }

    switch (operator) {
      case '+':
        setNum(parseFloat(operand1) + parseFloat(num))
        break
      case '-':
        setNum(parseFloat(operand1) - parseFloat(num))
        break
      case '*':
        setNum(parseFloat(operand1) * parseFloat(num))
        break
      case '/':
        if (parseFloat(num) === 0) {
          setNum('zero div error')
        } else {
          setNum(parseFloat(operand1) / parseFloat(num))
        }
        break
      default:
        break
    }
  }

  return (
    <>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <div id="display" className="display">
            {num}
          </div>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className="operators" onClick={operatorHandler} value={'/'}>
            /
          </button>
          <button className="numbers" onClick={inputNum} value={'7'}>
            7
          </button>
          <button className="numbers" onClick={inputNum} value={'8'}>
            8
          </button>
          <button className="numbers" onClick={inputNum} value={'9'}>
            9
          </button>
          <button className="operators" onClick={operatorHandler} value={'*'}>
            x
          </button>
          <button className="numbers" onClick={inputNum} value={'4'}>
            4
          </button>
          <button className="numbers" onClick={inputNum} value={'5'}>
            5
          </button>
          <button className="numbers" onClick={inputNum} value={'6'}>
            6
          </button>
          <button className="operators" onClick={operatorHandler} value={'-'}>
            -
          </button>

          <button className="numbers" onClick={inputNum} value={'1'}>
            1
          </button>
          <button className="numbers" onClick={inputNum} value={'2'}>
            2
          </button>
          <button className="numbers" onClick={inputNum} value={'3'}>
            3
          </button>
          <button className="operators" onClick={operatorHandler} value={'+'}>
            +
          </button>

          <button style={{ visibility: 'hidden' }}>?</button>
          <button className="numbers" onClick={inputNum} value={'0'}>
            0
          </button>
          <button onClick={inputNum} value={'.'}>
            ,
          </button>
          <button onClick={calculate}> = </button>
        </div>
      </Container>
    </>
  )
}
