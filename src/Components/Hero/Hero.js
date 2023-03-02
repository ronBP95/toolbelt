import React from 'react'

export default function Hero() {
  return (
    <div class='flex justify-center items-center w-full h-screen max-h-fit bg-sky-400'>
        <div>
          <div class="text-4xl">Upload your file here</div>
          <div class="flex text-xl">Upload Button<div>+</div></div>
          <div>Max File Size 50MB (want more?)</div>
        </div>
    </div>
  )
}
