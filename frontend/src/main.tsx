import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserProvider from './context/context.tsx'

createRoot(document.getElementById('root')!).render(
<UserProvider>

    <App />
</UserProvider>
  
)
