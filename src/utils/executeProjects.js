import { createRoot } from 'react-dom/client'
import sendCommand from "./sendCommand"
import Projects from "../components/projects";

const executeHelp = (command, commandstr) => {
    sendCommand(commandstr)
    //append to termcontent the help component (react)
    const help = document.createElement('div')
    const root = createRoot(help)
    root.render(<Projects />)
    document.querySelector('.termcontent').appendChild(help)
    document.getElementById('termcommandinput').focus()
}

export default executeHelp