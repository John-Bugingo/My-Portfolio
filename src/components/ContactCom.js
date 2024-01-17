import React from 'react'

const ContactCom = () => {
  return (
    <>
    <div className='contact1'>
      <div className='contact2'>
      <div className='contactheader'>
        <h1>GET IN TOUCH</h1>
      </div>
      <div className='contactfoam'>
        <div className='contactname'>
          <input type='text' placeholder='Your name' />
        </div>
        <div className='contactemail'>
          <input type='email' placeholder='Email' />
        </div>
        <div className='contactphone'>
          <input type='number' placeholder='Phone no' />
        </div>
        <div className='contactcheck'>
          <input type='text' placeholder='How can we help you' />
        </div>
        <div className='send'>Send</div>
      </div>
      </div>

    </div>
    </>
  )
}
export default ContactCom
