import NotExist from '../components/Nav/NotExist'
import sendCommand from './sendCommand'
import { createRoot } from 'react-dom/client'

const notExist = (cmd, commandstr) => {
    sendCommand(commandstr)
    //append to termcontent the help component (react)
    const error = document.createElement('div')
    const root = createRoot(error)
    root.render(<NotExist command={cmd[0]} />)
    document.querySelector('.termcontent').appendChild(error)
    document.getElementById('termcommandinput').focus()
}

export default notExist