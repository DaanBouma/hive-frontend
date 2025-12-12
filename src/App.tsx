import { useEffect, useState } from "react"
import "./style.css"
import { Card, Header } from "./components"

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isMobile) {
    return <p>Desktop size</p>
  }

  return (
    <div className="App">
      <Header title="Bijen horen erbij" description="Kies jouw bijenkast" />
      <div className="Body">
        <Card name="Bijenkast 1" date="20/05/2025 20:00" />
        <Card name="Bijenkast 2" date="20/05/2025 21:00" />
        <Card name="Bijenkast 3" date="20/05/2025 19:00" />
      </div>
    </div>
  )
}

export default App
