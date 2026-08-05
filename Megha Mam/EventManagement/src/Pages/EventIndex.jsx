import React from 'react'
import { NavLink } from 'react-router-dom'

function Eventindex() {
  return (
    <div>
        <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
  <div className="flex justify-between items-center mb-5">
    <h2 className="text-2xl font-bold text-gray-800">Event Management</h2>

    
    <NavLink to={'/event/create'} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"> + Add Event</NavLink>
  </div>

  <table className="min-w-full border-collapse">
    <thead>
      <tr className="bg-indigo-600 text-white">
        <th className="px-6 py-3 text-left">#</th>
        <th className="px-6 py-3 text-left">Event Name</th>
        <th className="px-6 py-3 text-left">Date</th>
        <th className="px-6 py-3 text-left">Time</th>
        <th className="px-6 py-3 text-left">Location</th>
        <th className="px-6 py-3 text-left">Organizer</th>
        <th className="px-6 py-3 text-left">Status</th>
        <th className="px-6 py-3 text-center">Action</th>
      </tr>
    </thead>

    <tbody className="text-gray-700">
      <tr className="border-b hover:bg-gray-50">
        <td className="px-6 py-4">1</td>
        <td className="px-6 py-4 font-medium">React Workshop</td>
        <td className="px-6 py-4">25 Aug 2026</td>
        <td className="px-6 py-4">10:00 AM</td>
        <td className="px-6 py-4">Ahmedabad</td>
        <td className="px-6 py-4">Megha Patel</td>
        <td className="px-6 py-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Active
          </span>
        </td>
        <td className="px-6 py-4 text-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            Delete
          </button>
        </td>
      </tr>

      <tr className="border-b hover:bg-gray-50">
        <td className="px-6 py-4">2</td>
        <td className="px-6 py-4 font-medium">Node.js Bootcamp</td>
        <td className="px-6 py-4">28 Aug 2026</td>
        <td className="px-6 py-4">02:00 PM</td>
        <td className="px-6 py-4">Surat</td>
        <td className="px-6 py-4">Rahul Shah</td>
        <td className="px-6 py-4">
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
            Upcoming
          </span>
        </td>
        <td className="px-6 py-4 text-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            Delete
          </button>
        </td>
      </tr>

      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">3</td>
        <td className="px-6 py-4 font-medium">AI Seminar</td>
        <td className="px-6 py-4">30 Aug 2026</td>
        <td className="px-6 py-4">11:30 AM</td>
        <td className="px-6 py-4">Vadodara</td>
        <td className="px-6 py-4">Neha Joshi</td>
        <td className="px-6 py-4">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
            Closed
          </span>
        </td>
        <td className="px-6 py-4 text-center space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Eventindex