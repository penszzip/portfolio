import { useState } from "react"
import Header from "./components/Header.jsx"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
