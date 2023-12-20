import React from 'react'
import Image, { StaticImageData } from 'next/image'
import category1 from '../../../public/images/category/category-1.jpg'
import category2 from '../../../public/images/category/category-2.jpg'
import category3 from '../../../public/images/category/category-3.jpg'
import category4 from '../../../public/images/category/category-4.jpg'
import category5 from '../../../public/images/category/category-5.jpg'
import category6 from '../../../public/images/category/category-6.jpg'
import { roboto } from '../fonts'

interface Category {
  img: StaticImageData
  text: String
}

const data: Category[] = [
  { img: category1, text: 'bedroom' },
  { img: category2, text: 'sofe' },
  { img: category3, text: 'office' },
  { img: category4, text: 'outdoor' },
  { img: category5, text: 'mattress' },
  { img: category6, text: 'dinning' },
]

function ShopCategoryComponent() {
  return (
    <div className="container pb-16 ">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        Shop by category
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {data.map((item, i) => (
          <ShopCategory img={item.img} text={item.text} key={i} />
        ))}
      </div>
    </div>
  )
}

function ShopCategory({ img, text }: Category) {
  return (
    <div className="relative group rounded-sm overflow-hidden">
      <Image src={img} alt="category 1" className="w-full" />
      <a
        href="#"
        className={`absolute capitalize inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex justify-center items-center text-xl text-white ${roboto.className} font-medium tracking-wide transition`}
      >
        {text}
      </a>
    </div>
  )
}

export default ShopCategoryComponent
