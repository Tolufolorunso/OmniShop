import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import Icon from '../icon/Icon'
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
      </div>
    </header>
  )
}

export default Header
