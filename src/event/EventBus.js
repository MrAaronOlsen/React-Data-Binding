const eventBus = {
  on(event, callback) {
    document.addEventListener(event.getName(), callback)
  },

  send(event, data) {
    document.dispatchEvent(new CustomEvent(event.getName(), { detail: data }))
  },

  remove(event, callback) {
    document.removeEventListener(event.getName(), callback)
  },
}

export default eventBus
