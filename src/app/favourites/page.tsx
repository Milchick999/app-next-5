'use client';

import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FavouritesPage() {
  const { favouritePosts, isLoggedIn } = useAppStore();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    const fetchFavourites = async () => {
      if (!isLoggedIn) return;

      try {
        setLoading(true);
        const result = await fetch('https://dummyjson.com/posts');
        const data = await result.json();

        const filtered = data.posts.filter((post: any) =>
          favouritePosts.includes(post.id)
        );

        setPosts(filtered);
      } catch (error) {
        console.error('Failed to load posts', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavourites();

  }, [favouritePosts, isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Favourites</h1>

      {loading
        ? (<p className="text-gray-500">Loading...</p>)
        : posts.length > 0
          ? (
            <div className="space-y-6">
              {posts.map((post: any) => (
                <div key={post.id} className="group p-6 border rounded-xl transition-shadow">

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 line-clamp-2">
                      {post.body}
                    </p>

                    <Link href={`/posts/${post.id}`} className="text-sm text-violet-500 mt-4 inline-block font-medium">
                      Read more
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )
          : (
            <div className="text-center py-10 border-1 rounded-2xl">
              <p className="text-gray-500">No favourites yet</p>

              <Link href="/" className="text-sm text-violet-500 font-medium">Go to Feed</Link>
            </div>
          )}
    </div>
  );
}