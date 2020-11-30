import { useEffect, useState } from "react"
import "./DropArea.css"
import DropAreaHeader from "./DropAreaHeader"

const DropArea = ({
  drop,
  allowDrop,
  undoChange,
  dropBoxArray,
  clearChanges
}) => {
  useEffect(() => {
    if (dropBoxArray !== undefined) {
      const dropbox = document.getElementById("dropbox")
      dropBoxArray.map((item) => {
        dropbox.appendChild(item)
      })
    }
  }, [dropBoxArray])

  return (
    <div className="droparea">
      <DropAreaHeader undoChange={undoChange} clearChanges={clearChanges} />
      {dropBoxArray && (
        <div
          id="dropbox"
          onDrop={(event) => drop(event)}
          onDragOver={(event) => allowDrop(event)}
          className="dropArea__body"
        ></div>
      )}
    </div>
  )
}

export default DropArea
