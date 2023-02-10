import React from 'react'
import Logo from '../../images/logos/logo-no-background.png'

export default function Nav() {
  return (
    <div class="flex fixed justify-between items-center w-full min-w-fit h-20 bg-gray-800">
        <div class="flex">
            <div class="ml-8">
                <img src={Logo} alt="Logo" class="w-40 max-w-min"/>
            </div>
            <div class="ml-10 mr-6">
                <ul class="hidden sm:flex text-white space-x-10 transition duration-200">
                    <li class="group cursor-pointer hover:text-red-500 transition duration-300">
                        Home
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
                    </li>
                    <li class="group cursor-pointer hover:text-red-500 transition duration-300">
                        About
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
                    </li>
                    <li class="group cursor-pointer hover:text-red-500 transition duration-300">
                        Contact
                        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-500"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex ml-8">
            <button type="button" class="hidden sm:flex text-white bg-red-600 font-medium rounded-lg text-sm w-24 px-6 py-2.5 text-center mr-7 transition duration-200 hover:scale-110 hover:bg-red-700 ">Sign In</button>
                <div class="sm:hidden space-y-1.5 mr-8">
                    <span class="block w-8 h-1 bg-gray-600"></span>
                    <span class="block w-8 h-1 bg-gray-600"></span>
                    <span class="block w-8 h-1 bg-gray-600"></span>
                </div>
        </div>
    </div>
  )
}
