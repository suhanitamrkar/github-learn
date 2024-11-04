import { title } from 'process'
import React from 'react'

const Card = () => {
  return (
    <div>

        <div
            key={id}
            className="min-w-full flex-shrink-0 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{content}</p>
            </div>
          </div>
    </div>
  )
}

export default Card