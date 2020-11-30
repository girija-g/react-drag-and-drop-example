import "./App.css"
import Elements from "./components/Elements/Elements"
import DropArea from "./components/DropArea/DropArea"
import { useState, useEffect } from "react"

const App = () => {
  const [idCounter, setIdCounter] = useState(1)
  const [dropBoxArray, setdropBoxArray] = useState([])
  const allowDrop = (event) => {
    event.preventDefault()
  }

  const undoChange = () => {
    var myobj = document.getElementById(idCounter - 1)
    myobj.remove()
    setIdCounter(idCounter - 1)
  }

  const clearChanges = () => {
    let confirmation = window.confirm(
      "Are you sure you want to clear all changes?"
    )
    if (confirmation == true) {
      setdropBoxArray(undefined)
      setIdCounter(1)
    }
  }

  const drop = (event) => {
    event.preventDefault()
    var data = event.dataTransfer.getData("text")

    var nodeCopy = document.getElementById(data).cloneNode(true)
    nodeCopy.id = "newId"
    switch (document.getElementById(data).id) {
      case "Input":
        {
          var input = document.createElement("input")
          input.className = "elementStyle inputStyle"
          input.setAttribute(
            "style",
            "position:absolute; top:" +
              event.pageY +
              "px; left:" +
              event.pageX +
              "px;"
          )
          input.setAttribute("id", idCounter)
          input.setAttribute("draggable", "true")
          input.type = "text"
          let arr = [...dropBoxArray]
          arr.push(input)
          setdropBoxArray(arr)
        }
        break
      case "Button":
        {
          var button = document.createElement("BUTTON")
          button.setAttribute(
            "style",
            "position:absolute; top:" +
              event.clientY +
              "px; left:" +
              event.clientX +
              "px;"
          )
          button.setAttribute("id", idCounter)
          button.className = "buttonStyle elementStyle"
          button.innerHTML = "BUTTON"
          let arr = [...dropBoxArray]
          arr.push(button)
          setdropBoxArray(arr)
        }
        break
      case "TextArea": {
        var textArea = document.createElement("textarea")
        textArea.setAttribute(
          "style",
          "position:absolute; top:" +
            event.clientY +
            "px; left:" +
            event.clientX +
            "px;"
        )
        textArea.setAttribute("id", idCounter)
        textArea.className = "elementStyle textAreaStyle"
        let arr = [...dropBoxArray]
        arr.push(textArea)
        setdropBoxArray(arr)
      }
    }
    setIdCounter(idCounter + 1)
  }

  const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id)
  }
  return (
    <div className="app">
      <div className="app__header">Hi Girija! Welcome to React Gui Builder</div>
      <div className="app__body">
        <Elements drag={drag} />
        <DropArea
          allowDrop={allowDrop}
          drop={drop}
          undoChange={undoChange}
          dropBoxArray={dropBoxArray}
          clearChanges={clearChanges}
        />
      </div>
    </div>
  )
}
export default App
