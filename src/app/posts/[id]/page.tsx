export const dynamic = "force-dynamic";

import LikeButton from "@/components/LikeButton";
import FavouriteButton from "@/components/FavouriteButton";
import { getPostById, getCommentsByPostId } from "@/lib/actions";

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [post, commentsData] = await Promise.all([
    getPostById(id),
    getCommentsByPostId(id)
  ]);

  return (
    <article className="max-w-3xl mx-auto py-10 px-4">

      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-4">
          {post.title}
        </h1>
        <p className="text-gray-800 leading-relaxed mb-10">
          {post.body}
        </p>
      </div>

      <div className="flex items-center gap-6 mb-10">
        <LikeButton
          postId={post.id}
          initialLikes={post.reactions.likes}
        />
        <FavouriteButton postId={post.id} />
      </div>

      <section>
        <h3 className="text-xl font-semibold mb-6">
          Comments ({commentsData.total})
        </h3>

        <div className="space-y-6">
          {commentsData.comments.map((comment) => (
            <div key={comment.id} className="border-b pb-4">
              <p className="text-sm font-medium text-gray-900">
                {comment.user.fullName}
                <span className="text-gray-500 ml-2">
                   @{comment.user.username}
                </span>
              </p>

              <p className="text-gray-800 mt-2">
                {comment.body}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                {comment.likes} likes
              </p>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}