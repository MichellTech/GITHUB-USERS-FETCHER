import React from 'react'
import { FaUsers } from 'react-icons/fa'
function MessageComp() {
  return (
    <section className='section-center'>
      <div className='message-comp'>
        {/* icon */}
        <div className='message-icon'>
          <FaUsers className='icon' />
        </div>
        {/* text */}
        <div className='message-text'>
          <h1>Welcome to the Github Database</h1>
          <p>
            Input your query parameters in the search box above to begin surfing
            through the GitHub Users database
          </p>
        </div>
      </div>
    </section>
  )
}

export default MessageComp
