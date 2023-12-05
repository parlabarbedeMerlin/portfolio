import executeHelp from "../utils/executeHelp";

const Aboutme = () => {
    return (<>
            <h3 className="font-black text-fuchsia-700">About me</h3>
            <div className="pl-5">
                <p className="text-sky-500 hover:underline hover:text-blue-600 font-bold">Me</p>
                <p>
                    Hey 👋, I'm Tristan, a web developper 🔗. I m' student 👨🏻‍🎓 at Sup de Vinci Paris 🗼, to become a web developper 👨🏻‍💻!
                </p>
                <p className="text-sky-500 hover:underline hover:text-blue-600 font-bold pt-5">Skills</p>
                <ul className="pl-10 list-disc list-outside">
                    <li>Node.js</li>
                    <li>React</li>
                    <li>NextJs</li>
                    <li>PostgreSQL</li>
                    <li>GIT</li>
                    <li>Prisma</li>
                </ul>
                <p className="text-sky-500 hover:underline hover:text-blue-600 font-bold pt-5">What I learn ?</p>
                <p>
                    I'm learning Three.js using the cours of <a className="text-sky-500 hover:underline hover:text-blue-600" href="https://bruno-simon.com/">Bruno Simon</a> : Three js Journey !
                </p>
            </div>
        </>
    )
}

export default Aboutme