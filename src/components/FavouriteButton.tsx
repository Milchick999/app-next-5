'use client';

import { useAppStore } from '@/store/useAppStore';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  postId: number;
}

export default function FavouriteButton({ postId }: Props) {
  const { favouritePosts, toggleFavourite } = useAppStore();

  const isFavourite = favouritePosts.includes(postId);

  return (
    <Button onClick={() => toggleFavourite(postId)} variant="ghost" size="sm" className="flex items-center gap-2">
      <Bookmark className={`h-4 w-4 ${isFavourite ? 'fill-violet-500 text-violet-500' : 'text-gray-400'}`} />

      <span className="w-6" />
    </Button>
  );
}