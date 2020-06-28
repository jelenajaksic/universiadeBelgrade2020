  const comments = [
    {
        "postId": 1,
        "id": 1,
        "liked": 10,
        "disliked": 5,
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "liked": 10,
        "disliked": 1,
        "body": "est natus enim nihil est dolore omnis  error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "liked": 13,
        "disliked": 1,
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
      {
        "postId": 2,
        "id": 4,
        "liked": 17,
        "disliked": 7,
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      },
      {
        "postId": 2,
        "id": 5,
        "liked": 11,
        "disliked": 5,
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      },
      {
        "postId": 3,
        "id": 6,
        "liked": 11,
        "disliked": 2,
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      },
      {
        "postId": 3,
        "id": 7,
        "liked": 1,
        "disliked": 2,
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      },
      {
        "postId": 3,
        "id": 8,
        "liked": 17,
        "disliked": 5,
        "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      },
      // {
      //   "postId": 4,
      //   "id": 9,
      //   "liked": 11,
      //   "disliked": 5,
      //   "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      // },
      // {
      //   "postId": 4,
      //   "id": 1,
      //   "liked": 10,
      //   "disliked": 5,
      //   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      // },
      // {
      //   "postId": 4,
      //   "id": 2,
      //   "liked": 10,
      //   "disliked": 1,
      //   "body": "est natus enim nihil est dolore omnis  error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      // },
      // {
      //   "postId": 5,
      //   "id": 3,
      //   "liked": 13,
      //   "disliked": 1,
      //   "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      // },
      // {
      //   "postId": 5,
      //   "id": 4,
      //   "liked": 17,
      //   "disliked": 7,
      //   "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      // },
      // {
      //   "postId": 6,
      //   "id": 5,
      //   "liked": 11,
      //   "disliked": 5,
      //   "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      // },
      // {
      //   "postId": 6,
      //   "id": 6,
      //   "liked": 11,
      //   "disliked": 2,
      //   "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      // },
      // {
      //   "postId": 7,
      //   "id": 7,
      //   "liked": 1,
      //   "disliked": 2,
      //   "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      // },
      // {
      //   "postId": 7,
      //   "id": 8,
      //   "liked": 17,
      //   "disliked": 5,
      //   "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      // },
      // {
      //   "postId": 7,
      //   "id": 9,
      //   "liked": 11,
      //   "disliked": 5,
      //   "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      // },
      // {
      //   "postId": 1,
      //   "id": 1,
      //   "liked": 10,
      //   "disliked": 5,
      //   "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      // },
      // {
      //   "postId": 7,
      //   "id": 2,
      //   "liked": 10,
      //   "disliked": 1,
      //   "body": "est natus enim nihil est dolore omnis  error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      // },
      // {
      //   "postId": 8,
      //   "id": 3,
      //   "liked": 13,
      //   "disliked": 1,
      //   "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      // },
      // {
      //   "postId": 9,
      //   "id": 4,
      //   "liked": 17,
      //   "disliked": 7,
      //   "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
      // },
      // {
      //   "postId": 9,
      //   "id": 5,
      //   "liked": 11,
      //   "disliked": 5,
      //   "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
      // },
      // {
      //   "postId": 9,
      //   "id": 6,
      //   "liked": 11,
      //   "disliked": 2,
      //   "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
      // },
      // {
      //   "postId": 10,
      //   "id": 7,
      //   "liked": 1,
      //   "disliked": 2,
      //   "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
      // },
      // {
      //   "postId": 10,
      //   "id": 8,
      //   "liked": 17,
      //   "disliked": 5,
      //   "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
      // },
      // {
      //   "postId": 10,
      //   "id": 9,
      //   "liked": 11,
      //   "disliked": 5,
      //   "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
      // }

  ];
  
  export default comments;