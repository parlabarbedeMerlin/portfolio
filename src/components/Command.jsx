const Command = (props) => {
    return (
        <div className="terminput w-full flex">
            <p className="font-bold">aBeautyfullHuman @ MyMind ~ %</p>
            <p className=" ml-3 grow">{props.command}</p>
        </div>
    )
}

export default Command