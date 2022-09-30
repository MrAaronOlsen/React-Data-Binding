export default class Event {
  static GLOBAL_MESSAGE = new Event('GLOBAL_MESSAGE')

  #name

  getName() {
    return this.#name
  }

  constructor(name) {
    this.#name = name
  }
}
