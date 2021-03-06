import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Yoga");
  }

  getHtml = async () => {
    return `
        <h1>Welcome to Omflow</h1>
        <a href="/teachers" data-link>View teachers</a>
        <a href="/classes" data-link>View classes</a>
    `;
  }
}
