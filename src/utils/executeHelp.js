import Help from "../components/Nav/Help"
import { createRoot } from 'react-dom/client'
import sendCommand from "./sendCommand"

const executeHelp = (command, commandstr) => {
    sendCommand(commandstr)
    //append to termcontent the help component (react)
    const help = document.createElement('div')
    const root = createRoot(help)
    root.render(<Help />)
    document.querySelector('.termcontent').appendChild(help)
    document.getElementById('termcommandinput').focus()
}

export default executeHelp