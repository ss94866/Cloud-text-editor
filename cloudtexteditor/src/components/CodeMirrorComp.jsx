import React from 'react'
import CodeMirror from "@uiw/react-codemirror";

export default function CodeMirrorComp(props) {
  return (
    <div>
      <CodeMirror height="40vh" 
        className="code-mirror-wrapper"
        onChange={props.changeFunc}
      />
    </div>
  )
}

