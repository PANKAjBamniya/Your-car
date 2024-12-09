import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Unices = () => {
  const supercars = [
    {
      name: "Bugatti Chiron",
      image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938",
      price: "$3,000,000",
      speed: "261 mph"
    },
    {
      name: "Koenigsegg Jesko",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
      price: "$2,800,000",
      speed: "300+ mph"
    },
    {
      name: "McLaren P1",
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c",
      price: "$1,150,000",
      speed: "217 mph"
    },
    {
      name: "Ferrari LaFerrari",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
      price: "$1,400,000",
      speed: "217 mph"
    },
    {
      name: "Lamborghini Aventador SVJ",
      image: "https://images.unsplash.com/photo-1680557120477-67e98e3ddbef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VwcmF8ZW58MHx8MHx8fDA%3D",
      price: "$517,770",
      speed: "217 mph"
    },
    {
      name: "Porsche 918 Spyder",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      price: "$845,000",
      speed: "214 mph"
    },
    {
      name: "Aston Martin Valkyrie",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a",
      price: "$3,200,000",
      speed: "250 mph"
    },
    {
      name: "Pagani Huayra",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
      price: "$2,400,000",
      speed: "238 mph"
    }
  ]

  return (
    <div className="bg-zinc-100 py-24 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Elite Supercars</h2>
          <p className="text-xl text-gray-400">
            Experience the pinnacle of automotive engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supercars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
                <div className="flex justify-between items-center text-gray-400">
                  <p>{car.price}</p>
                  <p>{car.speed}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <HiArrowNarrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Unices
