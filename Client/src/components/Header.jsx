import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import githubIcon from '../assets/images/github-mark.svg'

export default function Header() {
    return (
        <header className="w-full bg-gray-800 text-white p-4 border-b border-gray-700">
            <div className="container max-w-7xl flex justify-between items-center mx-auto font-eastarjet">
                <span />
                {/* <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-2" />
                </Link> */}
                <nav className="flex space-x-2 font-geist font-light">
                    <a href="https://github.com/thingseong" target="_blank" rel="noopener noreferrer" className="flex items-center px-4">
                        <img src={githubIcon} alt="GitHub" className="h-5 w-5 mr-2" />
                        @thingseong
                    </a>
                    <a href="https://github.com/Bada35" target="_blank" rel="noopener noreferrer" className="flex items-center px-4">
                        <img src={githubIcon} alt="GitHub" className="h-5 w-5 mr-2" />
                        @Bada35
                    </a>
                </nav>
            </div>
        </header>
    )
}
