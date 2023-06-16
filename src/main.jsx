import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from './global'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById("root")).render(<>
    <Global/>
    <GlobalStyles/>
</>)