import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from '@/components/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Heroes App</h1>
    <Button>click me</Button>
  </StrictMode>,
)
