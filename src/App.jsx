import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("");
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
      <div className="App"
      onClick={(e)=> inputRef.current.focus()}
      >    
      <h1> - Web Based Terminal -</h1>
      <p>type "help" to get the list of all avalialbe commands or "info" for more info about this project</p>
           <input 
            ref={inputRef}
            type="text"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                let newOutput = "";
                newOutput = output + '\n' + "$ " + input + "\n";
                switch (input) {
                  case "ls":
                    newOutput += "List of projects";
                    break;
                  case "pwd":
                    newOutput += "On your fav directory";
                    break;
                  case "clear":
                    newOutput="";
                    break;
                  case "":
                    newOutput += "enter a valid command"
                    break;
                  case "help":
                    newOutput += "\n-----ALL AVAILABLE COMMANDS-----\n \n ls -> list all the files \n pwd -> get the present file"
                    break;
                  case "info":
                    newOutput += "\n-----INFO-----\n Creator: Bandhan Majumder\nGitHub: github.com/bandhan-majumder/web-terminal \nTWitter: x.com/MEbandhan \n"
                    break;
                  default:
                    newOutput += "command not found"

                }
                setOutput(newOutput); // set the output
                setInput(""); // reset the input
              }
            }}
           />
           <div className="terminal">
            {output}
           </div>
      </div>
  )
}

export default App
