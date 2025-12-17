import { Link } from 'react-router-dom';

// for example, in a real application this is usually the response from an API
const posts = [
  { id: 1, title: 'First Post', body: 'Content of the first post' },
  { id: 2, title: 'Second Post', body: 'Content of the second post' },
  { id: 3, title: 'Third Post', body: 'Content of the third post' },
  { id: 4, title: 'Fourth Post', body: 'Content of the fourth post' },
  { id: 5, title: 'Fifth Post', body: 'Content of the fifth post' },
  { id: 6, title: 'Sixth Post', body: 'Content of the sixth post' },
];

export default function PostsList() {
  return (
    <>
      <h3>POSTS</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
