import React from 'react'
import Link from 'next/link'

function FooterBar() {
  return (
    
        <footer class="w-full mx-auto max-w-screen-xl bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright ©2023 <a href="https://Ada Derana.com/" class="hover:underline">Ada Derana</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6 ">News</Link>
                </li>
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" class="hover:underline">Contact Us</Link>
                </li>
            </ul>

            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6 ">News</Link>
                </li>
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link href="#" class="hover:underline">Contact Us</Link>
                </li>
            </ul>

            </div>
        </footer>
    
  )
}

export default FooterBar