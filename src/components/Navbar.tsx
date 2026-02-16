import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-brand-black text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-brand-orange hover:text-brand-green transition-colors">
            Sundown Cafe
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-brand-orange transition-colors">
              Home
            </Link>
            <Link to="/menu" className="hover:text-brand-orange transition-colors">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
