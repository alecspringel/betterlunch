import React from "react"

const Button = ({ className, children, style }) => {
  return (
    <button className={`btn ${className}`} style={style}>
      {children}
    </button>
  )
}

export default Button
