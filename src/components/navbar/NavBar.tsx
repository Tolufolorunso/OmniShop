'use client'
import React from 'react'
import Icon from '@/components/icon/Icon'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function NavBar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <nav className="bg-gray-800 hidden lg:block">
      <div className="container">
        <div className="flex">
          <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative font-semibold">
            <span className="text-white">
              <Icon icon={faBars} />
            </span>
            <span className="capitalize ml-2 text-white">all categories</span>

            <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
              <Link
                href="/"
                className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <Image
                  src="/images/icons/bed.svg"
                  alt="bed svg"
                  className="w-5 h-4 object-contain"
                  height={16}
                  width={20}
                />
                <span className="ml-6 text-gray-700 text-sm font-semibold">
                  BedRoom
                </span>
              </Link>
              <Link
                href="/"
                className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
              >
                <Image
                  src="/images/icons/bed.svg"
                  alt="bed svg"
                  className="w-5 h-4 object-contain"
                  height={16}
                  width={20}
                />
                <span className="ml-6 text-gray-700 text-sm font-semibold">
                  room
                </span>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between flex-grow pl-12">
            <div className="flex items-center space-x-6 text-base capitalize">
              <Link
                href="/"
                className={`text-gray-200 hover:text-white transition font-semibold  ${
                  pathname === '/' ? 'text-primary font-bold' : ''
                }`}
              >
                Home
              </Link>
              <Link
                href="/products"
                className={`text-gray-200 hover:text-white transition font-semibold  ${
                  pathname === '/products' ? 'text-primary font-bold' : ''
                }`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className={`text-gray-200 hover:text-white transition font-semibold  ${
                  pathname === '/about' ? 'text-primary font-bold' : ''
                }`}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`text-gray-200 hover:text-white transition font-semibold  ${
                  pathname === '/contact' ? 'text-primary font-bold' : ''
                }`}
              >
                Contact Us
              </Link>
            </div>
            <Link
              href="/shop"
              className={`text-gray-200 hover:text-white transition font-semibold  ${
                pathname === '/shop' ? 'text-primary font-bold' : ''
              }`}
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
