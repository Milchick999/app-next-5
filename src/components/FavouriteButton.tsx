'use client';

import { useAppStore } from '@/store/useAppStore';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  postId: number;
}

export default function FavouriteButton({ postId }: Props) {
  const { favouritePosts, toggleFavourite, isLoggedIn } = useAppStore();
  const router = useRouter();

  const isFavourite = favouritePosts.includes(postId);

  const handleFavourite = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }else {
      toggleFavourite(postId);
    }
  };

  return (
    <Button
      aria-label="Add to favourites"
      onClick={handleFavourite}
      variant="ghost"
      size="sm"
      className="flex items-center gap-2"
    >
      <Bookmark className={`h-4 w-4 ${isFavourite ? 'fill-violet-500 text-violet-500' : 'text-gray-400'}`} />

      <span className="w-6" />
    </Button>
  );
}