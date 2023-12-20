import React from 'react'
import Icon from '../icon/Icon'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function SideBar({
  isOpen,
  closeSideBar,
}: {
  isOpen: boolean
  closeSideBar: () => void
}) {
  return (
    <div
      className={`fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 transition  ${
        isOpen || 'hidden'
      }`}
      onClick={closeSideBar}
    >
      <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
        <div
          className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
          onClick={closeSideBar}
        >
          <Icon icon={faTimes} />
        </div>
        <h3 className="text-xl font-semibold mb-2 pl-4 pt-4 pb-4 bg-primary text-white">
          Menu
        </h3>
        <div>
          <Link
            href="/"
            className="block px-4 py-4 font-medium transition hover:bg-gray-200"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="block px-4 py-4 font-medium transition hover:bg-gray-200"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block px-4 py-4 font-medium transition hover:bg-gray-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-4 font-medium transition hover:bg-gray-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SideBar
