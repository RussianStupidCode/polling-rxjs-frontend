export default class MessagesList {
  constructor() {
    this.messages = [];
    this.el = document.createElement('div');
    this.el.classList.add(
      'messages-list',
      'd-flex',
      'flex-column',
      'p-1',
      'align-items-center'
    );

    const title = document.createElement('span');
    title.classList.add('align-self-start', 'mx-2');
    title.textContent = 'incoming: ';

    this.contentBlock = document.createElement('table');
    this.contentBlock.classList.add(
      'messages-list-content',
      'w-100',
      'p-1',
      'table',
      'table-striped'
    );

    this.contentBlock.innerHTML = `
      <thead></thead>
      <tbody></tbody>
    `;

    this.el.insertAdjacentElement('beforeEnd', title);
    this.el.insertAdjacentElement('beforeEnd', this.contentBlock);

    this.body = this.contentBlock.querySelector('tbody');
  }

  addMessage(message) {
    this.messages.push(message);
    message.bindToDOM(this.body, 'afterBegin');
  }

  hasMessage(message) {
    return this.messages.find((el) => el.id === message.id);
  }

  bindToDOM(parentElement) {
    parentElement.insertAdjacentElement('beforeEnd', this.el);
  }
}
