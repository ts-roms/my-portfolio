

const ProfilePage: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
          <div className="flex flex-col items-center justify-between w-full lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h1 className="font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6">
                  Hi there, I'm
                  <span className="inline-block text-blue-500">Roms</span>
                </h1>
                <h2 className="text-gray-700 text-base md:text-lg">
                  I'm a software engineer based Cebu
                </h2>
              </div>
              <a href="#about-me" className="items-center h-12 px-6 py-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700">A</a>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <div className="flex w-full relative">
                <img src="https://via.placeholder.com/85" alt="..." className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900" id="about-me">
        <div className="barber-pic absolute top-0 left-0 right-0 bottom-0 z-0 opacity-10"></div>
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-white">
          <div className="max-w-xl mb-10 md:mx-auto lg:max-w-5xl md:mb-12">
            <h2 className="text-center max-w-lg mx-auto mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                {/* image */}
                <span className="relative">About</span>
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div id="contact-me" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="df31b9f6-a505-42f8-af91-d2b7c3218e5c" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)" width="52" height="24"></rect>
              </svg>
              <span className="relative">Contact Me</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          <a href="mailto:rcena.msi@gmail.com" target="_blank" rel="noreferrer" aria-label="">
            <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"><i className="fa-solid fa-envelope text-blue-700 text-3xl "></i></div>
                  <h6 className="font-semibold leading-5">Email</h6>
                </div>
                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">Let's get in touch.</p>
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/romario-cena/" target="_blank" rel="noreferrer" aria-label="">
            <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"><i className="fa-brands fa-linkedin text-blue-700 text-3xl "></i></div>
                  <h6 className="font-semibold leading-5">LinkedIn</h6>
                </div>
                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">Let's connect.</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/ts-roms" target="_blank" rel="noreferrer" aria-label="">
            <div className="relative  p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-blue-500 group-hover:scale-x-100"></div>
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-blue-500 group-hover:scale-y-100"></div>
              <div className="relative p-5 bg-white rounded-sm">
                <div className="flex flex-col items-center  mb-2 lg:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0"><i className="fa-brands fa-github text-blue-700 text-3xl "></i></div>
                  <h6 className="font-semibold leading-5">GitHub</h6>
                </div>
                <p className="mb-2 text-sm text-gray-900 text-center lg:text-start">Check out my repos.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="skills" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 -right-28 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="df31b9f6-a505-42f8-af91-d2b7c3218e5c" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)" width="52" height="24"></rect>
              </svg>
              <span className="relative">My Skills</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24"><i className="fab fa-html5 text-blue-700 text-4xl" aria-hidden="true"></i></div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">FrontEnd</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">HTML</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">CSS</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">JavaScript</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">React</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Redux</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">NextJs</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">TailwindCSS</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Bootstrap</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">jQuery</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">APIs</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">MaterialUI</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24"><i className="fa-solid fa-code text-blue-700 text-4xl" aria-hidden="true"></i></div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">BackEnd</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">NodeJS</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Express</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">MySQL</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Sequelize</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">MongoDB</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Mongoose</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">GraphQL</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Apollo</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">RestAPI</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 mx-auto sm:w-24 sm:h-24"><i className="fa-solid fa-screwdriver-wrench text-blue-700 text-4xl" aria-hidden="true"></i></div>
            <h6 className="mb-2 font-semibold leading-5 border-b-2 pb-4">Tools</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Git</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">GitHub</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Vercel</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">VSCode</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Postman</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Webpack</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">TypeScript</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Jest</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">Scrum Board</p>
            <p className="max-w-md mb-3 text-sm text-gray-900 mx-auto">IntelliJ</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage;