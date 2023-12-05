import executeHelp from "../../utils/executeHelp";

const NotExist = (props) => {
    return (
        <>
            <pre>
                <h3 className="font-black text-red-600">&apos;{props.command}&apos; does not exist! To see the available commands type <button className=" hover:font-normal hover:underline hover:text-blue-600" onClick={() => { executeHelp('', 'help') }}>&apos;help&apos;</button>. </h3>
                <p> </p>
            </pre >
        </>
    );
}

export default NotExist;