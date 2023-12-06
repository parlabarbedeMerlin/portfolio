import clearTerm from "./clearterm"
import executeHelp from "./executeHelp"
import notExist from "./notExist"
import sendCommand from "./sendCommand"
import executeAboutme from "./executeAboutme";
import executeProjects from "./executeProjects";

const commandInputSend = (e) => {
    console.log(e.code)
    if (e.code === 'Enter') {
        const commandstr = document.getElementById('termcommandinput').value
        const command = commandstr.split(' ')
        console.log(command)
        document.getElementById('termcommandinput').value = ''

        if (command[0] === "clear") {
            clearTerm(command, commandstr)
        } else if (command[0] === 'help') {
            executeHelp(command, commandstr)
        }else if (command[0] === 'aboutme') {
            executeAboutme(command, commandstr)
        }else if (command[0] === 'projects'){
            executeProjects(command, commandstr)
        } else if (command[0].length === 0) {
            sendCommand('')
        } else {
            notExist(command, commandstr)
            console.log(command.length)
        }
    }
    window.scrollTo(0, document.body.scrollHeight);
    document.getElementById('termcommandinput').focus()
}

export default commandInputSend