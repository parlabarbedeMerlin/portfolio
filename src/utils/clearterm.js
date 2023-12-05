import sendCommand from "./sendCommand"

const clearTerm = (command, commandstr) => {
    sendCommand(commandstr)
    document.querySelector('.termcontent').innerHTML = ''
    document.getElementById('termcommandinput').focus()
}

export default clearTerm