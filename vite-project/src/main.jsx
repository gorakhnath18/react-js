import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom app !   df</h1>
        </div>
    )
}

const ReactElement ={
    type : 'a',
    props:{
        href:'https://google.com',
        target :'_blank'
    },
    chlidren: 'Click me to visit google'
}
const anotherElement =(
    <a href="https://google.com"target='_blank'>visit google</a>
)

createRoot(document.getElementById('root')).render(
 anotherElement
)
