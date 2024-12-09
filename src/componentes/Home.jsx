import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-20 dark:bg-gray-800">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 dark:text-blue-600">
            Find Your Dream Car Today
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover our exclusive collection of luxury and performance vehicles. 
            Get the best deals and premium service guaranteed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Cars
            <HiArrowNarrowRight className="ml-2 text-xl" />
          </motion.button>
        </motion.div>

        {/* Right Content - Car Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1494905998402-395d579af36f"
              alt="Luxury Car"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
            <div className="mt-10 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Premium Sedan</h3>
                <p className="text-gray-600">Starting from $45,000</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 text-white p-3 rounded-full"
              >
                <HiArrowNarrowRight className="text-xl" />
              </motion.button>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute left-1/1 transform -translate-x-1/2 bg-white p-4 flex rounded-xl shadow-lg gap-8"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600">Cars</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">1000+</p>
              <p className="text-gray-600">Customers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
