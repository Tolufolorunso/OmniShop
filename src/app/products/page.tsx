import BreadCrum from '@/components/products/BreadCrum'
import Sidebar from '@/components/products/Sidebar'
import React from 'react'

function ProductsPage() {
  return (
    <div className="container">
      <BreadCrum />
      <div className="grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        {/* sidebar */}
        <div className="col-span-1 px-4 pt-4 pb-6 shadow-sm rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block  bg-gray-200">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
