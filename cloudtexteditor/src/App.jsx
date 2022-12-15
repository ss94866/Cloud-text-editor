import { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "./App.css";
import CodeMirrorComp from "./components/CodeMirrorComp"; 

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="App">
      <div className="flex-container">
        <div className="flex-item code-view">
          <h3>HTML</h3>
          <CodeMirrorComp language="xml" changeFunc={(e) => {setHtml(e)}}/>
        </div>
        <div className="flex-item code-view">
          <h3>CSS</h3>
          <CodeMirrorComp language="css" changeFunc={(e) => {setCss(e)}}/>
        </div>
        <div className="flex-item code-view">
          <h3>JS</h3>
          <CodeMirrorComp language="javascript" changeFunc={(e) => {setJs(e)}}/>
        </div>
      </div>
      <div>
        <iframe 
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
