import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import githubIcon from '../assets/images/github-mark.svg'

export default function Header() {
    return (
        <header className="w-full bg-gray-800 text-white p-4 border-b border-gray-700">
            <div className="container max-w-7xl flex justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 mr-2" /> {/* 로고 이미지 */}
                    <h1 className="text-xl font-sans text-sky-200 font-normal">게임즈</h1> {/* 필요시 로고 옆에 텍스트 추가 */}
                </Link>
                <nav className="flex space-x-2 font-geist font-light">
                    <a href="https://github.com/thingseong" target="_blank" rel="noopener noreferrer" className="flex items-center px-4">
                        <img src={githubIcon} alt="GitHub" className="h-5 w-5 mr-2" /> {/* GitHub 아이콘 */}
                        @thingseong
                    </a>
                    <a href="https://github.com/Bada35" target="_blank" rel="noopener noreferrer" className="flex items-center px-4">
                        <img src={githubIcon} alt="GitHub" className="h-5 w-5 mr-2" /> {/* GitHub 아이콘 */}
                        @Bada35
                    </a>
                </nav>
            </div>
        </header>
    )
}
