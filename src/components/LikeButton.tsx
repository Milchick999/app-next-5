'use client';

import { useAppStore } from '@/store/useAppStore';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  postId: number;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: Props) {
  const { likedPosts, toggleLike } = useAppStore();

  const isLiked = likedPosts.includes(postId);
  const displayLikes = isLiked ? initialLikes + 1 : initialLikes;

  return (
    <Button onClick={() => toggleLike(postId)} variant="ghost" size="sm" className="flex items-center gap-2">
      <Heart className={`h-4 w-4 ${ isLiked ? 'fill-pink-500 text-pink-500' : 'text-gray-400'}`} />

      <span className="text-sm w-6 text-left">{displayLikes}</span>
    </Button>

  );
}