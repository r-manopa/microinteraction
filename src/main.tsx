import './tailwind.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const el = document.querySelector('#root')

if(el) {
    const root = createRoot(el)
    root.render(
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    )
}