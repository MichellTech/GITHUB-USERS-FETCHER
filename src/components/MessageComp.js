import React from 'react'

function MessageComp({ displayMessage }) {
  return (
    <section className='section-center'>
      <div className='message-comp'>
        {/* icon */}
        <div className='message-icon'>{displayMessage?.icon}</div>
        {/* text */}
        <div className='message-text'>
          <h1>{displayMessage?.title}</h1>
          <p>{displayMessage?.text}</p>
        </div>
      </div>
    </section>
  )
}

export default MessageComp
