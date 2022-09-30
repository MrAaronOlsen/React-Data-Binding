export default class Event {
  static GLOBAL_MESSAGE = new Event('GLOBAL_MESSAGE')

  #name

  constructor(name) {
    this.#name = name
  }
}
