import { Poppins, Roboto, Rubik_Bubbles } from 'next/font/google'

export const poppins = Poppins({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const rubik = Rubik_Bubbles({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const roboto = Roboto({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})
