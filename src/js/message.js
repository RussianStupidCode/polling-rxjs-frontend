import { dateFormat, textTruncate } from './utils';

export default class Message {
  constructor({ id, from, subject, received }) {
    this.id = id;
    this.el = document.createElement('tr');
    this.el.classList.add('message');

    this.el.innerHTML = `
      <td>
        <span class="badge bg-success mr-2">${from}</span>
      </td>
      <td>
        <span class="badge bg-primary mx-2">${textTruncate(subject)}</span>
      </td>
      <td>
        <span class="badge bg-secondary mx-2">${dateFormat(received)}</span>
      </td>
    `;
  }

  bindToDOM(parentElement, position = 'beforeEnd') {
    parentElement.insertAdjacentElement(position, this.el);
  }
}
