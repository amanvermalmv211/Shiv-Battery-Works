import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white pt-4">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className='text-2xl font-semibold text-center mb-6 text-yellow-500'>Shiv Battery Works</div>

          <div className="flex flex-col items-center justify-between gap-4 border-t-4 border-b-4 rounded-lg border-double border-yellow-400 py-6 px-2 md:flex-row">
            <nav className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 md:gap-6 w-full md:w-2/3">
              <Link to="/" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Home</Link>
              <HashLink to="/#aboutus" className="transition duration-400 hover:text-yellow-500 hover:scale-110">About Us</HashLink>
              <Link to="/solarpannel" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Solar Pannel</Link>
              <Link to="/battery" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Battery</Link>
              <Link to="/inverters" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Inverter</Link>
              <Link to="/waterro" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Water RO</Link>
              <Link to="/geyser" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Geyser</Link>
              <Link to="/" className="transition duration-400 hover:text-yellow-500 hover:scale-110">Repairing</Link>
            </nav>

            <div className="flex flex-col lg:flex-row items-center  gap-2 lg:gap-6">
              <div className='text-yellow-400 text-lg'>Feel free to Contact </div>

              <div className='flex gap-8'>
                <Link to="/" target="_blank" className="transition duration-400 hover:scale-125">
                  <i className="fa fa-lg fa-whatsapp text-green-500" aria-hidden="true"></i>
                </Link>

                <Link to="/" target="_blank" className="transition duration-400 hover:scale-125">
                  <i className="fa fa-md fa-facebook text-blue-500" aria-hidden="true"></i>
                </Link>

                <Link to="/" target="_blank" className="transition duration-400 hover:scale-125">
                  <i className="fa fa-lg fa-instagram text-pink-400" aria-hidden="true"></i>
                </Link>

                <Link to="/" target="_blank" className="transition duration-400 hover:scale-125">
                  <i className="fa fa-lg fa-twitter text-blue-500" aria-hidden="true"></i>
                </Link>

                <Link to="/" target="_blank" className="transition duration-400 hover:scale-125">
                  <i className="fa fa-lg fa-envelope text-yellow-200" aria-hidden="true"></i>
                </Link>
              </div>

            </div>

          </div>

          <div className="py-6 text-center text-sm">© 2023 - Shiv Battery Works. All rights reserved.</div>
        </footer>
      </div>
    </>
  )
}

export default Footer;