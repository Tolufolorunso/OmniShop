import Image from 'next/image'
import React from 'react'

import footerLogo from '../../../public/images/easyshop.png'
import { roboto } from '@/app/fonts'
import Icon from '../icon/Icon'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Copyright from './Copyright'

function SiteFooter() {
  return (
    <React.Fragment>
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image src={footerLogo} alt="omni shop connect" />
              <p className={`text-gray-500 text-base ${roboto.className}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                consectetur adipisicing.
              </p>
              <div className="flex space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <Icon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <Icon icon={faTwitter} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <Icon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <Icon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-2 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                    Solutions
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      insights
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                    Supports
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      insights
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                    Solutions
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      insights
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wide uppercase">
                    Supports
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      Commerce
                    </a>
                    <a
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900 block font-semibold"
                    >
                      insights
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </React.Fragment>
  )
}

export default SiteFooter
