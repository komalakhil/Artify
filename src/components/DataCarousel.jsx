import React from 'react'

export default function DataCarousel() {
  return (
    <div>
        <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full gap-4">
        <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
          <br />
                <div className='text-3xl flex justify-center font-bold'>
                    Doodling
                </div>
                <br />
                <div className='text-xl flex justify-center'>
                        Doodling is a spontaneous, unstructured form of drawing that can serve as a creative and accessible starting point for artistic expression.
                </div>
                <br />
        </div>
        <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
          <br />
                <div className='text-3xl flex justify-center font-bold'>
                Digital Arts
                </div>
                <br />
                <div className='text-xl flex justify-center'>
                Digital art is a dynamic and innovative medium that harnesses digital technology to create visually stunning and interactive works of art.
                </div>
                <br />
        </div>
  </div> 
  <div id="item2" className="carousel-item w-full gap-4">
  <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
    <br />
                <div className='text-3xl flex justify-center font-bold'>
                    Mandala
                </div>
                <br />
                <div className='text-xl flex justify-center'>
                    A mandala is a intricate and symmetrical geometric design often used for meditation, spiritual, and aesthetic purposes.
                </div>
                <br />
        </div>
        <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
          <br />
                <div className='text-3xl flex justify-center font-bold'>
                Painting
                </div>
                <br />
                <div className='text-xl flex justify-center'>
                Dive into a mesmerizing array of paintings, each a unique narrative of art, spanning from vibrant abstracts to serene landscapes, awaiting your discovery                </div>
                <br />
        </div>
  </div> 
  <div id="item3" className="carousel-item w-full gap-4">
    <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
      <br />
                  <div className='text-3xl flex justify-center font-bold'>
                  Pottery and Ceramics
                  </div>
                  <br />
                  <div className='text-xl flex justify-center'>
                  Crafting clay into timeless treasures - the world of pottery and ceramics awaits your touch                 
                  </div>
                  <br />
          </div>
          <div className='bg-slate-300 flex flex-col w-1/2 border rounded-lg'>
            <br />
                  <div className='text-3xl flex justify-center font-bold'>
                  Traditional and Cultural Art
                  </div>
                  <br />
                  <div className='text-xl flex justify-center'>
                  Journey through the vibrant tapestry of cultural art, where traditions meet contemporary expression                  </div>
                  <br />
          </div>
  </div> 
</div> 
<div className="flex justify-center w-full py-2 gap-4">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
    </div>
  )
}
