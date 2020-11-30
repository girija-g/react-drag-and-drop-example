import { Delete, Undo } from "@material-ui/icons"
import "./DropAreaHeader.css"

const DropAreaHeader = ({ undoChange, clearChanges }) => {
  return (
    <div className="dropAreaHeader">
      {/*<div onClick={undoChange}>
        <Undo />
  </div>*/}
      <div onClick={clearChanges}>
        <Delete />
      </div>
      {"*Changes will be autosaved"}
    </div>
  )
}

export default DropAreaHeader
