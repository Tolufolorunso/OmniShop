import { StaticImageData } from 'next/image'

import product1 from '../../public/images/products/product1.jpg'
import product2 from '../../public/images/products/product2.jpg'
import product3 from '../../public/images/products/product3.jpg'
import product4 from '../../public/images/products/product4.jpg'
import product5 from '../../public/images/products/product5.jpg'
import product6 from '../../public/images/products/product6.jpg'
import product7 from '../../public/images/products/product7.jpg'
import product8 from '../../public/images/products/product8.jpg'

export interface Products {
  name: string
  price: number
  oldPrice: number
  img: StaticImageData
  numberOfComments: number
  seller: string
  id: number
}

export const products: Products[] = [
  {
    name: 'Guyer chair',
    price: 45.08,
    oldPrice: 55.01,
    img: product1,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 1,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product2,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 2,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product3,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 3,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product4,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 4,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product5,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 5,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product6,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 6,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product7,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 7,
  },
  {
    name: 'Guyer chair',
    price: 45.01,
    oldPrice: 55.01,
    img: product8,
    numberOfComments: 102,
    seller: 'Tolulope shoppy',
    id: 8,
  },
]
