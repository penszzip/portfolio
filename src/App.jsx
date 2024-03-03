import { useState } from "react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Portfolio from "./components/Portfolio.jsx"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Portfolio />
      </main>
    </div>
  )
}

export default App
