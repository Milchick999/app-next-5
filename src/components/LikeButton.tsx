'use client';

import { useAppStore } from '@/store/useAppStore';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  postId: number;
  initialLikes: number;
}

export default function LikeButton({ postId, initialLikes }: Props) {
  const { likedPosts, toggleLike, isLoggedIn } = useAppStore();
  const router = useRouter();

  const isLiked = likedPosts.includes(postId);
  const displayLikes = isLiked ? initialLikes + 1 : initialLikes;

  const handleLike = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }else {
      toggleLike(postId);
    }
  };

  return (
    <Button onClick={handleLike} variant="ghost" size="sm" className="flex items-center gap-2">
      <Heart className={`h-4 w-4 ${ isLiked ? 'fill-pink-500 text-pink-500' : 'text-gray-400'}`} />

      <span className="text-sm w-6 text-left">{displayLikes}</span>
    </Button>

  );
}