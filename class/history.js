export class History {
  constructor() {
    this.history = [];
  }

  saveHistory(history) {
    this.history.push(history)
  }
}