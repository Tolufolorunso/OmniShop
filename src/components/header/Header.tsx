import MobileMenuBar from '../mobile-menubar/MobileMenuBar'
import NavIcons from './NavIcons'
import NavSearch from './NavSearch'

function Header() {
  return (
    <header className="py-4 shadow-sm bg-pink-100 lg:bg-white">
      <div className="container flex items-center justify-between">
        <a href="#" className="block w-32">
          tolu
        </a>
        <NavSearch />
        <NavIcons />
        <MobileMenuBar />
      </div>
    </header>
  )
}

export default Header
