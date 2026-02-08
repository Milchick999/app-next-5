export const dynamic = "force-static";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number
  };
}

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const posts: Post[] = data.posts;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>

      {posts.map((post) => (
        <div key={post.id} className="flex gap-4 py-8 border-b">

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-5">
              {post.title}
            </h2>

            <p className="text-gray-800 mb-4 line-clamp-4 md:line-clamp-2">
              {post.body}
            </p>

            <a href={`/posts/${post.id}`} className="text-sm font-medium text-green-500">
              Read more
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-20 text-sm">
            <button>Like</button>
            <button>Favourite</button>
          </div>

        </div>
      ))}
    </div>
  )}