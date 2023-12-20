'use client'
import React from 'react'
import Icon from '../icon/Icon'
import {
  faBars,
  faListUl,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import SideBar from './SideBar'

function MobileMenuBar() {
  const [isSidebarOpen, setIsidebarOpen] = React.useState(false)

  function closeSideBar() {
    setIsidebarOpen(!isSidebarOpen)
  }

  return (
    <React.Fragment>
      <div className="fixed w-full border-t shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-10 transition">
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div
            className="text-2xl"
            id="menu"
            onClick={() => setIsidebarOpen(!isSidebarOpen)}
          >
            <Icon icon={faBars} />
          </div>
          <div className="text-xs leadin-3">Menu</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <Icon icon={faListUl} />
          </div>
          <div className="text-xs leadin-3">Category</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <Icon icon={faSearch} />
          </div>
          <div className="text-xs leadin-3">Search</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-sm">
            5
          </span>
          <div className="text-2xl">
            <Icon icon={faShoppingCart} />
          </div>
          <div className="text-xs leadin-3">Cart</div>
        </a>
      </div>
      <SideBar isOpen={isSidebarOpen} closeSideBar={closeSideBar} />
    </React.Fragment>
  )
}

export default MobileMenuBar
