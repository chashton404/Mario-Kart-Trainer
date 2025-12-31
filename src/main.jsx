import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { WebGPUCanvas } from './WebGPUCanvas.jsx'
import { CoordinateHUD } from './misc/CoordinateHUD.jsx'
import { BikeOverlay } from './misc/BikeOverlay.jsx'

createRoot(document.getElementById('root')).render(

  <div className='canvas-container'>
    {/* The suspense is what is shown while a the WebGPUCanvas loads */}
      <Suspense fallback={false}>
      <WebGPUCanvas />
      <CoordinateHUD />
      <BikeOverlay />
      </Suspense>
      <div className="version">Mario Kart Trainer - v0.0.0</div>
    </div>
)
