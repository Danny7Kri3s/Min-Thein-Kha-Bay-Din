import { useState } from "react";
import Page from "./Layout/Page"


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleBtn = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
    
        <Page darkMode={darkMode} toggleBtn={toggleBtn}/>
    </>
  )
}




export default App
