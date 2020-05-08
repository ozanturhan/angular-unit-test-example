import { UserService } from './user-service';
import { of } from 'rxjs';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should get users from api', () => {
    // arrange
    const mockResponse = [
      {
        id: 1,
        name: 'ozan',
      },
    ];

    spyOn(userService, 'getUsers').and.returnValue(of(mockResponse));

    // act
    userService.getUsers().subscribe(users => {
      expect(users[0].name).toEqual('ozan');
      expect(users[0].id).toEqual(1);
    });
  });
});
