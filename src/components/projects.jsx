import Image from "next/image";
const Projects = () => {
    return (<>
            <h3 className="font-black text-fuchsia-700">Projects</h3>
            <div className="pl-5 mb-5">
                <p className="text-sky-500 hover:underline hover:text-blue-600 font-bold">PHP</p>
                <ul className="ml-5">
                    <li>
                        <div className="flex items-center">
                            <a href="https://tristan-renard-dev.wstr.fr" target="_blank"><Image className="max-w-none" src="/img/blog-gpt.png" alt="blog-gpt home page" width="300" height="195"></Image></a>
                            <p className="ml-20">This project use php, The goal of this project was tu manipulate files to make a forum.</p>
                        </div>
                    </li>
                </ul>
                <p className="text-sky-500 hover:underline hover:text-blue-600 font-bold">NextJS</p>
                <ul className="ml-5">
                    <li>
                        <div className="flex items-center">
                            <a href="https://async-hack.vercel.app" target="_blank"><Image className="max-w-none" src="/img/async-hack.png" alt="blog-gpt home page" width="300" height="195"></Image></a>
                            <p className="ml-20">This project was realised during a hackathon during 1day. The goal of this hackathon was to creat a tool to estimate the bonus for a care. I only regret to use NextJs because It&apos;s overkill for this small project.</p>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <a href="https://tristan-renard.com" target="_blank"><Image className="max-w-none" src="/img/portfolio.png" alt="blog-gpt home page" width="300" height="195"></Image></a>
                            <p className="ml-20">This beautiful portfolio.</p>
                        </div>
                    </li>
                </ul>


            </div>
        </>
    )
}

export default Projects