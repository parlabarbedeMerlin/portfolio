import clearTerm from "../../utils/clearterm"
import executeHelp from "../../utils/executeHelp"
import executeAboutme from "../../utils/executeAboutme";
import executeProjects from "../../utils/executeProjects";

const Help = () => {
    return (
        <>
            <pre>
                <h3 className="font-black text-fuchsia-700">Help</h3>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={() => { executeHelp('', 'help') }}>help</button></p>
                <p>    └ Show this manual to help you !</p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={()=> {executeAboutme('', 'aboutme')}}>aboutme</button></p>
                <p>    └ Give some information about me :</p>
                <p>      About what I like, what I study and what I would like to do in the future ! </p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={()=> {executeProjects('', 'projects')}}>projects</button></p>
                <p>    └ Shows my favorite personal projects (that I can show).</p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={() => { clearTerm() }}>clear</button></p>
                <p>    └ Clear this terminal.</p>
                <p> </p>
            </pre >
        </>
    )
}

export default Help