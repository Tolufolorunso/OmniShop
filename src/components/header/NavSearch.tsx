import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Icon from '../icon/Icon'

function NavSearch() {
  return (
    <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <Icon icon={faSearch} />
      </span>
      <input
        type="text"
        className="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary"
        placeholder="Search"
      />
      <button
        className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition"
        type="submit"
      >
        Search
      </button>
    </div>
  )
}

export default NavSearch
