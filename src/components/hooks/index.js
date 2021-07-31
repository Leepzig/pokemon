import React, { useState } from "react"




export const useColorManager = (initialColor) => {
  const [color, setColor] = useState(initialColor)

  function changeLightness(change) {
    let oldColor = color.split(",")
    let numL = parseInt(oldColor[2])
    const newNumL = (numL + change) + "%)"
    oldColor.splice(2, 1, newNumL)
    return oldColor
  }

  return [color, changeLightness]
}
