"use client"

import commandInputSend from "../utils/commandInputSend"
import executeHelp from "../utils/executeHelp"
import { useEffect } from "react"

let prout = 1

const Home = () => {
  /*
   * show preview of commands on tab pressed
   *
   * @param {Event} e - Document Event
   */

  const tabPreview = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      document.getElementById('termcommandinput').placeholder = 'help    about me    projects    clear'
    }
  }

  useEffect(() => {
    if (prout) {
      executeHelp('', 'help')
      prout--
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-start p-4 bg-gray-900" onKeyDown={(e) => tabPreview(e)}>
      <h1 className="text-white text-sm mb-6">
        <pre className="text-[9px] leading-[.4rem]">
          <span className="text-yellow-300">  ::::::::::: :::::::::  ::::::::::: :::::::: ::::::::::: :::     ::::    :::          :::::::::  :::::::::: ::::    :::     :::     :::::::::  :::::::::</span>{'\n'}
          <span className="text-amber-400">     :+:     :+:    :+:     :+:    :+:    :+:    :+:   :+: :+:   :+:+:   :+:          :+:    :+: :+:        :+:+:   :+:   :+: :+:   :+:    :+: :+:    :+: </span>{'\n'}
          <span className="text-amber-500">    +:+     +:+    +:+     +:+    +:+           +:+  +:+   +:+  :+:+:+  +:+          +:+    +:+ +:+        :+:+:+  +:+  +:+   +:+  +:+    +:+ +:+    +:+  </span>{'\n'}
          <span className="text-amber-600">   +#+     +#++:++#:      +#+    +#++:++#++    +#+ +#++:++#++: +#+ +:+ +#+          +#++:++#:  +#++:++#   +#+ +:+ +#+ +#++:++#++: +#++:++#:  +#+    +:+   </span>{'\n'}
          <span className="text-orange-500">  +#+     +#+    +#+     +#+           +#+    +#+ +#+     +#+ +#+  +#+#+#          +#+    +#+ +#+        +#+  +#+#+# +#+     +#+ +#+    +#+ +#+    +#+    </span>{'\n'}
          <span className="text-orange-600"> #+#     #+#    #+#     #+#    #+#    #+#    #+# #+#     #+# #+#   #+#+#          #+#    #+# #+#        #+#   #+#+# #+#     #+# #+#    #+# #+#    #+#     </span>{'\n'}
          <span className="text-red-600">###     ###    ### ########### ########     ### ###     ### ###    ####          ###    ### ########## ###    #### ###     ### ###    ### #########</span> {'\n\n\n\n'}
          <span>type <span className="text-sky-500 hover:underline hover:text-blue-600 cursor-pointer" onClick={() => { executeHelp('', 'help') }}>&apos;help&apos;</span> to get help all commands references are clickable</span>
        </pre>
      </h1>
      <div className="termcontent" >
      </div>
      <div className="terminput w-full flex">
        <p className="font-bold">aBeautyfullHuman @ MyMind ~ %</p>
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
