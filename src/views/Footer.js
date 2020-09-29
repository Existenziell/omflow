import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="https://omflow.yoga/">Omflow</a>
        </div>
    `;
  }
}
