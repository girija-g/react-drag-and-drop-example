import { ControlPoint, TextFieldsSharp } from "@material-ui/icons"
import React from "react"
import "./Elements.css"

const Elements = ({ drag }) => {
  return (
    <div className="elements">
      <Element icon={<TextFieldsSharp />} name={"Input"} drag={drag} />
      <Element icon={<ControlPoint />} name={"Button"} drag={drag} />
      <Element icon={<TextFieldsSharp />} name={"TextArea"} drag={drag} />
    </div>
  )
}

const Element = ({ icon, name, drag }) => {
  return (
    <div
      className="element"
      draggable="true"
      onDragStart={(event) => drag(event)}
      id={name}
    >
      <span className="element__icon">{icon}</span>
      <span className="element__name">{name}</span>
    </div>
  )
}

export default Elements
