import React from 'react'
import Image from 'next/image'
import deliverVan from '../../../public/images/icons/delivery-van.svg'
import moneyBack from '../../../public/images/icons/money-back.svg'
import serviceHour from '../../../public/images/icons/service-hours.svg'

function FeaturesComponent() {
  return (
    <div className="container py-16">
      <div className="lg:w-10/12 grid md:grid-cols-3 lg:gap-6 mx-auto">
        {/* single Feature */}
        <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transi hover:border-slate-400 hover:bg-gray-200 duration-300">
          <Image
            src={deliverVan}
            alt="delivary van"
            className="w-10 lg:w-12 h-12 object-contain"
          />
          <div className="">
            <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
            <p className="text-gray-500 text-xs lg:text-sm">Order over $200</p>
          </div>
        </div>
        <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transi hover:border-slate-400 hover:bg-gray-200 duration-300">
          <Image
            src={moneyBack}
            alt="delivary van"
            className="w-10 lg:w-12 h-12 object-contain"
          />
          <div className="">
            <h4 className="font-medium capitalize text-lg">Money Return</h4>
            <p className="text-gray-500 text-xs lg:text-sm capitalize">
              30 days money return
            </p>
          </div>
        </div>
        <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transi hover:border-slate-400 hover:bg-gray-200 duration-300">
          <Image
            src={serviceHour}
            alt="delivary van"
            className="w-10 lg:w-12 h-12 object-contain"
          />
          <div className="">
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-xs lg:text-sm">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesComponent
