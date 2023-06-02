import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorldApp from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <HelloWorldApp 
        user = { {name:'Juan', lastName: 'Doe'} } 
        id = { 1 } 
        title = { 'Hola Mundo' } 
      />
   </React.StrictMode>,
)
