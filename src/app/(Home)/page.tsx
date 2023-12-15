import Link from 'next/link'

function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36 relative"
      style={{ backgroundImage: 'url(/images/banner-bg.jpg)' }}
    >
      <div className="container">
        <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-semibold mb-4">
          Best Collection For <br className="hidden sm:block" /> Home Decoration
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
  )
}

export default Home
