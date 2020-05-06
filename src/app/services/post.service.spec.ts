import { TestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post } from '../models/post';

describe('Post Service', () => {
  let postService: PostService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    postService = TestBed.inject(PostService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should get post list', () => {
    const mockResponse = [
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'body 1',
      },
    ] as Post[];

    postService.getPosts().subscribe(posts => expect(mockResponse).toEqual(posts));

    const req = controller.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toEqual('GET');

    req.flush({});
    controller.verify();
  });

  it('should get post with user id', () => {
    const mockResponse = {
      userId: 1,
      id: 1,
      title: 'title 1',
      body: 'body 1',
    } as Post;

    postService.getPostWithUserId(1).subscribe(post => expect(mockResponse).toEqual(post));

    const req = controller.expectOne(`https://jsonplaceholder.typicode.com/posts?userId=${1}`);

    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
    controller.verify();
  });
});
