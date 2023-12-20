import React from 'react'

function Sidebar() {
  return (
    <div className="divide-gray-300 divide-y space-y-5 relative">
      <div className="relative">
        <div className="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer"></div>
        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
          Categories
        </h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="bedroom"
              id="Bedroom"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer accent-primary"
            />
            <label
              htmlFor="Bedroom"
              className="text-gray-600 ml-3  cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="bedroom"
              id="Bedroom"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="Bedroom"
              className="text-gray-600 ml-3  cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="bedroom"
              id="Bedroom"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="Bedroom"
              className="text-gray-600 ml-3  cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="bedroom"
              id="Bedroom"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="Bedroom"
              className="text-gray-600 ml-3  cursor-pointer"
            >
              Bedroom
            </label>
            <div className="ml-auto text-gray-600 text-sm">(15)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
