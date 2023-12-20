import Link from 'next/link'
import React from 'react'
import Icon from '../icon/Icon'
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'

function BreadCrum() {
  return (
    <div className="py-4 flex justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/" className="text-primary text-base">
          <Icon icon={faHome} />
        </Link>
        <span className="text-sm text-gray-500">
          <Icon icon={faChevronRight} />
        </span>
        <p className="text-gray-500">Shop</p>
      </div>
    </div>
  )
}

export default BreadCrum
