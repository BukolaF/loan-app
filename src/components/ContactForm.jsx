
// eslint-disable-next-line react/prop-types
export const ContactForm = ({form, ToastContainer}) => {
  return (
    <>
      <form ref={form} className='mx-auto max-w-xl gap-8 sm:mt-[20px]' noValidate=''>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-white tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='name'>NAME</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='name' placeholder='Sweet Sour' required type='text' />
        </div>
        <div>
            <label className='block text-white tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='email'>EMAIL</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='email' placeholder='Bold@example.com' required type='email' />
        </div>
        </div>
        <div className='flex flex-col mb-5'>
            <label className='block text-white text-[18px] font-bold mb-2 mt-8' htmlFor='subject'>SUBJECT</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='subject'placeholder='' required type='text' />
        </div>
        <div className='flex flex-col mb-5'>
            <label className='block text-white text-[18px] font-bold mb-2 mt-8' htmlFor='message'>MESSAGE </label>
           <textarea rows='4' className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500'name='message'placeholder='Type your message here...' required type='text' />
        </div>
        <div className='flex justify-center '>
          <button type='submit' className='bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-white'>
            Submit
          <ToastContainer />
          </button>
        </div>
      </form>  
    </>
  )
}
