import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-neutral-900 hover:bg-neutral-700 text-white text-left p-6 border-2 border-neutral-600 rounded-2xl flex flex-col gap-16 ">
      <form onSubmit={handleSubmit}>
        <div >
          <label>
            <input
              type="text"
              name="name"
              placeholder='  Name'
              value={formData.name}
              onChange={handleInputChange}
               className='w-[100%] rounded mb-3 bg-neutral-800 p-4'
            />
          </label>
        </div>

        <div >
          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='  Email'
              className='w-[100%] rounded mb-3 bg-neutral-800 p-4'
            />
          </label>
        </div>

        <div >
          <label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='  Message'
              className='w-[100%] h-32 rounded mb-3 bg-neutral-800 p-4'
            />
          </label>
        </div>

        <div className='rounded-xl px-4 py-2 bg-[#ff4800] drop-shadow-2xl text-white'><button className='w-[100%] ' type="submit">Send</button></div>
      </form>
    </div>
  );
};

export default Form;
