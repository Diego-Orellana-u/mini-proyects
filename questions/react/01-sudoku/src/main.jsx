import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BoardContextProvider } from './context/boardContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BoardContextProvider>
    <App />
  </BoardContextProvider>,
)
