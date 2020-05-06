import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

class UserService {
  getUsers(): Observable<any> {
    return ajax('    https://jsonplaceholder.typicode.com/users').pipe(map(response => response.response));
  }
}
