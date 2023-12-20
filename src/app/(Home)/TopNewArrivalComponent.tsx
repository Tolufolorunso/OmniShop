import React from 'react'
import Image from 'next/image'

import Icon from '@/components/icon/Icon'
import { faHeart, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { roboto } from '../fonts'
import { Products, products } from '@/data/products'
import Link from 'next/link'

function TopNewArrivalComponent() {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Top New Arrival
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {[...products.slice(0, 4)].map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export function ProductItem({
  img,
  name,
  oldPrice,
  price,
  numberOfComments,
  seller,
  id,
}: Products) {
  return (
    <div className="group rounded bg-white shadow overflow-hidden">
      <div className="relative">
        <Image src={img} alt="product-1" className="w-full" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
          <a
            href="#"
            className="text-white bg-primary hover:bg-gray-800 transition flex text-lg w-9 h-9 rounded-full items-center justify-center"
          >
            <Icon icon={faSearch} />
          </a>
          <a
            href="#"
            className="text-white bg-primary hover:bg-gray-800 transition flex text-lg w-9 h-9 rounded-full items-center justify-center"
          >
            <Icon icon={faHeart} />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href={`/products/${id}`}>
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p
            className={`text-primary text-xl ${roboto.className} font-semibold`}
          >
            ${price}
          </p>
          <p
            className={`text-gray-400 text-sm ${roboto.className} line-through`}
          >
            ${oldPrice}
          </p>
        </div>
        <div className="flex items-center ">
          <div className="flex gap-1 text-sm text-yellow-400">
            <span>
              <Icon icon={faStar} />{' '}
            </span>
            <span>
              <Icon icon={faStar} />{' '}
            </span>
            <span>
              <Icon icon={faStar} />{' '}
            </span>
            <span>
              <Icon icon={faStar} />{' '}
            </span>
            <span>
              <Icon icon={faStar} />{' '}
            </span>
          </div>
          <div className="text-xs text-gray-500 ml-3">({numberOfComments})</div>
        </div>
        <p className={`text-gray-400 text-sm mt-2 ${roboto.className}`}>
          Seller: {seller}
        </p>
      </div>
      <Link
        href={`/products/${id}`}
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition"
      >
        Add To Cart
      </Link>
    </div>
  )
}

export default TopNewArrivalComponent
