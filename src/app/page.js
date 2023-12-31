"use client"

import commandInputSend from "../utils/commandInputSend"
import executeHelp from "../utils/executeHelp"
import { useEffect } from "react"

let prout = 1

const Home = () => {

  useEffect(() => {
    if (prout) {
      executeHelp('', 'help')
      prout--
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-start p-4 bg-gray-900 overflow-hidden">
      <h1 className="text-white text-sm mb-6">
        <pre className="text-[60%] leading-[.4rem]">
          <span className="text-yellow-300 lg:flex">  ::::::::::: :::::::::  ::::::::::: :::::::: ::::::::::: :::     ::::    ::: <span className="hidden lg:block">         :::::::::  :::::::::: ::::    :::     :::     :::::::::  :::::::::</span></span>{'\n'}
          <span className="text-amber-400 lg:flex">     :+:     :+:    :+:     :+:    :+:    :+:    :+:   :+: :+:   :+:+:   :+:   <span className="hidden lg:block">       :+:    :+: :+:        :+:+:   :+:   :+: :+:   :+:    :+: :+:    :+: </span></span>{'\n'}
          <span className="text-amber-500 lg:flex">    +:+     +:+    +:+     +:+    +:+           +:+  +:+   +:+  :+:+:+  +:+    <span className="hidden lg:block">      +:+    +:+ +:+        :+:+:+  +:+  +:+   +:+  +:+    +:+ +:+    +:+  </span></span>{'\n'}
          <span className="text-amber-600 lg:flex">   +#+     +#++:++#:      +#+    +#++:++#++    +#+ +#++:++#++: +#+ +:+ +#+     <span className="hidden lg:block">     +#++:++#:  +#++:++#   +#+ +:+ +#+ +#++:++#++: +#++:++#:  +#+    +:+   </span></span>{'\n'}
          <span className="text-orange-500 lg:flex">  +#+     +#+    +#+     +#+           +#+    +#+ +#+     +#+ +#+  +#+#+#     <span className="hidden lg:block">     +#+    +#+ +#+        +#+  +#+#+# +#+     +#+ +#+    +#+ +#+    +#+   </span> </span>{'\n'}
          <span className="text-orange-600 lg:flex"> #+#     #+#    #+#     #+#    #+#    #+#    #+# #+#     #+# #+#   #+#+#      <span className="hidden lg:block">    #+#    #+# #+#        #+#   #+#+# #+#     #+# #+#    #+# #+#    #+#    </span> </span>{'\n'}
          <span className="text-red-600 flex">###     ###    ### ########### ########     ### ###     ### ###    ####          <span className="hidden lg:block">###    ### ########## ###    #### ###     ### ###    ### ######### </span></span> {'\n\n\n\n'}
          <span>type <button className="text-sky-500 hover:underline hover:text-blue-600 cursor-pointer" onClick={() => { executeHelp('', 'help') }}>&apos;help&apos;</button> to get help all commands references are clickable</span>
        </pre>
      </h1>
      <div className="termcontent font-mono" >
      </div>
      <div className="terminput w-full flex overflow-hidden font-mono">
        <p className="font-bold">aBeautyfullHuman <span className="hidden"> @ MyMind ~ </span>%</p>
        <input
          id="termcommandinput"
          type="text"
          className="bg-transparent focus:outline-none ml-3 grow"
          onKeyDown={(e) => { commandInputSend(e) }}
          autoFocus
        ></input>
      </div>
    </main>
  )
}

export default Home
