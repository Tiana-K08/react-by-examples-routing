import { useParams, Link } from 'react-router-dom';

// for example, in a real application this is usually the response from an API
const posts = [
  { id: 1, title: 'First Post', body: 'Content of the first post' },
  { id: 2, title: 'Second Post', body: 'Content of the second post' },
  { id: 3, title: 'Third Post', body: 'Content of the third post' },
  { id: 4, title: 'Fourth Post', body: 'Content of the fourth post' },
  { id: 5, title: 'Fifth Post', body: 'Content of the fifth post' },
  { id: 6, title: 'Sixth Post', body: 'Content of the sixth post' },
];

export default function PostItem() {
  const { postId } = useParams();
  const parsedPostId = Number(postId);

  if (Number.isNaN(parsedPostId)) {
    return <h2>Post not found *</h2>;
  }

  const post = posts.find((p) => p.id === parsedPostId);

  if (!post) return <h2>Post not found</h2>;

  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>Page for post with #{post.id}</p>
        <p>{post.body}</p>
      </div>
      <Link to="/blog">Return to posts list</Link>
    </>
  );
}
