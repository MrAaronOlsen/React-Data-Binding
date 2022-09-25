import React from 'react'

import { Event, EventBus } from 'event'

export default function GlobalFunction() {
  const [message, setMessage] = React.useState(null)

  const handleGlobalMessage = React.useCallback((data) => {
    setMessage(data.detail)
  })

  React.useEffect(() => {
    EventBus.on(Event.GLOBAL_MESSAGE, handleGlobalMessage)
    return () => EventBus.remove(Event.GLOBAL_MESSAGE, handleGlobalMessage)
  })

  return (
    <div>
      <div>Global Message</div>
      <div>{message}</div>
    </div>
  )
}
