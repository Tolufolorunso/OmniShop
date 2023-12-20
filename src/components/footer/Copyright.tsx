import Image from 'next/image'
import React from 'react'

import methodmage from '../../../public/images/methods.png'

function Copyright() {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; Omni-Shop 2024</p>
        <div>
          <Image src={methodmage} alt="logo" className="h-5 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Copyright
