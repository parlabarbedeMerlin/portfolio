import clearTerm from "../../utils/clearterm"
import executeHelp from "../../utils/executeHelp"

const HelpPreview = () => {
    return (
        <>
            <pre>
                <h3 className="font-black text-fuchsia-700">Help</h3>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={() => { executeHelp('', 'help') }}>help</button></p>
                <p>    └ Show this manual to help you !</p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600">aboutme</button></p>
                <p>    └ Give some information about me :</p>
                <p>      About what I like, what I study and what I would like to do in the future ! </p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600">projects</button></p>
                <p>    └ Shows my favorite personal projects (that I can show).</p>
                <p> </p>
                <p>  <button className="text-sky-500 hover:underline hover:text-blue-600" onClick={() => { clearTerm() }}>clear</button></p>
                <p>    └ Clear this terminal.</p>
                <p> </p>
            </pre >
        </>
    )
}

export default HelpPreview