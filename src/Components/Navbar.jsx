import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-8'>
      <div className="logo">
        Ochi
      </div>
      <div className="links">
      {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
            <a key={index} className="text-md font-semibold">{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
