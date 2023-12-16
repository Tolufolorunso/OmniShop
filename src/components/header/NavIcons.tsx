import React from 'react'
import Icon from '../icon/Icon'
import {
  faHeart,
  faShoppingBag,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const data = [
  { text: 'Wish List', icon: faHeart, number: 5 },
  { text: 'Cart', icon: faShoppingBag, number: 4 },
  { text: 'Account', icon: faUser, number: null },
]

function NavIcons() {
  return (
    <div className="space-x-4 flex items-center">
      {data.map((i) => {
        return (
          <a
            href="#"
            key={i.text}
            className="block text-center text-gray-700 hover:text-primary transition relative"
          >
            {i.number && (
              <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                {i.number}
              </span>
            )}
            <div className="text-xl sm:text-2xl">
              <Icon icon={i.icon} />
            </div>
            <div className="text-[10px] sm:text-xs font-semibold leading-3">
              {i.text}
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default NavIcons
