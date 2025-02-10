import { useState } from 'react'
import './App.css'
import ValentinePage from './components/valentine'

function App() {
  const [niggtext, setniggtext] = useState(false)

  return (
    <>
      <div>
        {!niggtext ? (
          <div>
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="flex justify-center items-center h-screen">
              <button className="text-4xl text-white font-bold" onClick={()=>setniggtext(true) }>What's up my Nigger!</button>
            </div>
          </div>
        ) : (
          <ValentinePage />
        )}
      </div>
    </>
  )
}

export default App
