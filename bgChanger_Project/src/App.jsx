

import { useState } from "react"

function App() {
  const [color, setColour] = useState("black")

  return (
    <>
    <div className ="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColour("red")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"red"}}
          >Red</button>
          <button 
          onClick={() => setColour("olive")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"olive"}}
          >Red</button>

          <button 
          onClick={() => setColour("blue")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"blue"}}
          >Blue</button>

          <button 
          onClick={() => setColour("skyblue")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"skyblue"}}
          >Skyblue</button>

          <button 
          onClick={() => setColour("pink")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"pink"}}
          >Pink</button>

          <button 
          onClick={() => setColour("green")}
          className="outline-none px-6 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"green"}}
          >Green</button>

          <button 
          onClick={() => setColour("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:shadow-xl duration-200"
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
