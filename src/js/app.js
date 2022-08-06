import { ajax } from 'rxjs/ajax';
import { interval, mergeMap, filter, catchError, from, map, of } from 'rxjs';
import MessagesList from './messagesList';
import Message from './message';
// import Message from './message';

const URL = 'https://polling-rxjs-backend.herokuapp.com/messages/unread';

const root = document.querySelector('.root');

const messagesElement = new MessagesList();

messagesElement.bindToDOM(root);

interval(2000)
  .pipe(
    mergeMap(() =>
      ajax.getJSON(URL).pipe(
        catchError(() => of({})),
        filter((value) => value.status === 'ok')
      )
    ),
    map((value) => value.messages)
  )
  .subscribe((messages) => {
    from(messages)
      .pipe(filter((message) => !messagesElement.hasMessage(message)))
      .subscribe((message) => messagesElement.addMessage(new Message(message)));
  });
