import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ darkMode,handletheme }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Cars', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-blue-600"
            >
              YourCars
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <div className='flex items-center gap-2'>
            <button className='bg-blue-500 rounded-sm py-2 px-5 text-white font-sans hover:bg-blue-900 duration-200'>Sign-Up</button>
            <button className='bg-blue-500 rounded-sm py-2 px-5 text-white font-sans hover:bg-blue-900 duration-200'>Log-in</button>
            <button 
            onClick={()=>{
              handletheme()
            }}
            className='bg-zinc-500 rounded-sm py-2 px-5 text-white font-sans hover:bg-zinc-900 duration-75'>
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
