import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EventCreate() {
    const navigate = useNavigate();
    const [event,setEvent] = useState({});
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setEvent({
            ...event,
            [name]:value
        })
    }

    const handleClick = async(e)=>{
       
         e.preventDefault();

    console.log("Submit clicked");
        try {
              console.log(event);
            let res = await axios.post('http://localhost:5000/events',event);
            if(res){
                alert("Event created")
                //navigate('/event')
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div>
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
  <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl p-8">

    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
      Event Management Form
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleClick} method='POST'>

      {/* Event Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Event Name
        </label>
        <input
          type="text"
          placeholder="Enter event name"
          name='eventname'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Event Date
        </label>
        <input
          type="date"
           name='date'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Event Time */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Event Time
        </label>
        <input
          type="time"
           name='time'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          placeholder="Enter location"
           name='location'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Organizer */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Organizer
        </label>
        <input
          type="text"
          placeholder="Organizer name"
           name='organizername'
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Status
        </label>
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"   name='Status'
          onChange={handleChange}>
          <option>Select Status</option>
          <option value={'Upcoming'}>Upcoming</option>
          <option value={'Active'}>Active</option>
          <option value={'Completed'}>Completed</option>
          <option value={'Cancelled'}>Cancelled</option>
        </select>
      </div>

     
      {/* Buttons */}
      <div className="md:col-span-2 flex justify-end gap-4 mt-4">
        <button
          type="reset"
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
          onClick={handleClick}
        >
          Save Event
        </button>
      </div>

    </form>
  </div>
</div>
    </div>
  )
}

export default EventCreate