import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full bg-gray-800 text-white p-4 shadow-md flex justify-center">
            <div className="container max-w-4xl flex justify-between items-center">
                <h1 className="text-xl font-bold">My App</h1>
                <nav>
                    <Link to="/" className="px-4">Home</Link>
                    <Link to="/event/123" className="px-4">Event</Link>
                </nav>
            </div>
        </header>
    )
}