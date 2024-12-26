import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-xl font-bold">
                        Payment System
                    </Link>
                </div>
            </div>
        </header>
    )
}