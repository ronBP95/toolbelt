import React from 'react'
import Logo from '../../images/logos/logo-no-background.png'

export default function Nav() {
  return (
    <div class="flex justify-between items-center w-full h-20 bg-gray-800">
        <div class="flex">
            <div class="ml-8">
                <img src={Logo} alt="Logo" class="w-40"/>
            </div>
            <div class="ml-10">
                <ul class="flex text-white space-x-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-7 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign In</button>
        </div>
    </div>
  )
}
