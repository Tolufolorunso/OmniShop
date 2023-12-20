import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import offerImg from '../../../public/images/offer.jpg'

import ShopCategoryComponent from './ShopCategoryComponent'
import FeaturesComponent from './FeaturesComponent'
import TopNewArrivalComponent from './TopNewArrivalComponent'
import RecommendedComponent from './RecommendedComponent'
import { products } from '@/data/products'

function Home() {
  return (
    <React.Fragment>
      <div
        className="bg-cover bg-no-repeat bg-center py-36 relative"
        style={{ backgroundImage: 'url(/images/banner-bg.jpg)' }}
      >
        <div className="container">
          <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-semibold mb-4">
            Best Collection For <br className="hidden sm:block" /> Home
            Decoration
          </h1>
          <p className="text-base text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo
            labore <br className="hidden sm:block" /> corrupti sequi dolor odio
            facilis aperiam vero, sunt praesentium quasi.
          </p>
          <div className="mt-11">
            <Link
              href="/shop"
              className="bg-primary text-white px-8 py-3 font-medium border border-primary uppercase rounded-md hover:bg-transparent hover:text-primary transition"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
      {/* Features */}
      <FeaturesComponent />

      {/* shop categories */}
      <ShopCategoryComponent />

      {/* Top New Arrival */}
      <TopNewArrivalComponent />

      {/* Ads */}
      <div className="container pb-16">
        <a href="#">
          <Image src={offerImg} alt="ads" className="w-full" />
        </a>
      </div>

      {/* Recommended for you */}
      <RecommendedComponent />
    </React.Fragment>
  )
}

export default Home
