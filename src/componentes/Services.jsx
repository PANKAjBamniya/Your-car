import React from 'react'
import { motion } from 'framer-motion'
import { HiWrenchScrewdriver, HiCog6Tooth, HiSparkles, HiShieldCheck } from 'react-icons/hi2'

const Services = () => {
  const services = [
    {
      icon: <HiWrenchScrewdriver className="w-8 h-8" />,
      title: "Maintenance & Repairs",
      description: "Expert maintenance and repair services to keep your vehicle running at peak performance."
    },
    {
      icon: <HiCog6Tooth className="w-8 h-8" />,
      title: "Custom Modifications",
      description: "Personalize your vehicle with our professional customization services."
    },
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "Detailing Services",
      description: "Premium detailing services to keep your car looking showroom fresh."
    },
    {
      icon: <HiShieldCheck className="w-8 h-8" />,
      title: "Warranty Coverage",
      description: "Comprehensive warranty packages for your peace of mind."
    }
  ]

  return (
    <div className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive automotive services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule Service
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
