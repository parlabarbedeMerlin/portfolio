import ReactDOM from 'react-dom'
import Command from '../components/Command'
import { createRoot } from 'react-dom/client'

const sendCommand = (commandstr) => {
    const cmd = document.createElement('div')
    const root = createRoot(cmd)
    root.render(<Command command={commandstr} />)
    document.querySelector('.termcontent').appendChild(cmd)
}

export default sendCommand