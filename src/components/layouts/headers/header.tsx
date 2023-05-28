

const Header = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a aria-label="RaulWebDev" title="RaulWebDev" className="inline-flex items-center" href="/">
            <i className="mr-2 text-2xl text-blue-500 fa-solid fa-layer-group"></i>
            <span className="ml-2 text-2xl tracking-wide text-gray-100 uppercase font-thin">Roms</span>
          </a>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a href="#about-me" className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200">About Me</a>
            </li>
            <li>
              <a href="#skills" className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200">Skills</a>
            </li>
            <li><a href="#projects" className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-blue-accent-200">Projects</a>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <a href="#contact-me" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none">Contact Me</a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded">
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
              </svg></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;