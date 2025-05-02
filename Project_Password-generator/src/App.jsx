import { useCallback, useState ,useEffect,useRef} from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useReg hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "!@#$%^&*()_+";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)// for example
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-1 mx-2">
          {" "}
          Password Generator{" "}
        </h1>
        <div className='className = "flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className="outline-none w-80 h-100 py-2 px-2  rounded-l "
            placeholder="Password"
            readOnly
            
            ref = {passwordRef}

          />


          <button 
          onClick={copyPasswordToClipboard}
          
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r my-3  h-10 hover:bg-yellow-700"
          >
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type ='range' 
            min={6}
            max = {20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(e.target.value)}
            />
            <label >Length :{length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);

            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className=" flex items-center gap-x-1 py-5">
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);

            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>


        </div>
      </div>
      
    </>
  );
}

export default App;
