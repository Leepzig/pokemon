import React, { useState } from "react"




export const useCounter = (intialCount) => {

  const [count, setCount] = useState(intialCount)

  function increaseCount() {
    setCount(count+1)
  }

  return [count, increaseCount]
}

export const useButtonSwitch = (initialButton) => {
  const [button, setButton] = useState(initialButton)

  function OnOffSwitch(e) {
    e.target.style.backgroundColor = e.target.style.backgroundColor === button.onColor? button.offColor : button.onColor
  }
  const example = { onColor:"green", offColor:"red"}

  return [button, OnOffSwitch]
}