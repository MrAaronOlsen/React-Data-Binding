import React from 'react'

import { Event, EventBus } from 'event'

export default function GlobalFunction() {
  const [message, setMessage] = React.useState('')

  function handleChange(event) {
    setMessage(event.target.value)
  }

  function sendMessage() {
    EventBus.send(Event.GLOBAL_MESSAGE, message)
  }

  return (
    <div>
      <input value={message} onChange={handleChange} />
      <div onClick={sendMessage}>Send</div>
    </div>
  )
}
