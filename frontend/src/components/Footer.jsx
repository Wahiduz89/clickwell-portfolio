import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      {/* Main Footer Section */}
      <div className='bg-slate-900 text-white py-16 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 text-sm'>
          
          {/* Company Info */}
          <div>
            <img src={assets.lp_img} className='mb-6 w-32 filter brightness-200' alt="Clickwell Logo" />
            <p className='w-full md:w-2/3 text-gray-300 leading-6'>
              Clickwell Private Limited is an Indian e-commerce company, headquartered in Bangalore. 
              The company initially focused on online book sales before expanding into other product 
              categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className='text-xl font-medium mb-6 text-white'>COMPANY</p>
            <ul className='flex flex-col gap-3 text-gray-300'>
              <li className='hover:text-blue-400 cursor-pointer transition-colors'>Home</li>
              <li className='hover:text-blue-400 cursor-pointer transition-colors'>About us</li>
              <li className='hover:text-blue-400 cursor-pointer transition-colors'>Delivery</li>
              <li className='hover:text-blue-400 cursor-pointer transition-colors'>Privacy policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className='text-xl font-medium mb-6 text-white'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-gray-300'>
              <li className='hover:text-blue-400 transition-colors'>+1-212-456-7890</li>
              <li className='hover:text-blue-400 transition-colors'>contact@clickwell.com</li>
            </ul>
            
            {/* Social Media Icons */}
            <div className='flex gap-3 mt-6'>
              <div className='w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105'>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className='w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105'>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </div>
              <div className='w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105'>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347l-.402 1.404c-.071.233-.233.284-.538.171-1.997-.93-3.249-3.858-3.249-6.224 0-5.112 3.713-9.805 10.701-9.805 5.616 0 9.983 4.002 9.983 9.348 0 5.579-3.516 10.064-8.402 10.064-1.639 0-3.183-.85-3.708-1.973l-.859 3.274c-.364 1.412-1.348 3.182-2.005 4.266C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-slate-800 text-white border-t border-slate-700">
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <p className='py-6 text-sm text-center text-gray-400'>
            Copyright 2025@ Clickwell.com - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer