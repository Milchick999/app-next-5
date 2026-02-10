import { create } from 'zustand';

interface AppState {
  isLoggedIn: boolean;
  favouritePosts: number[];
  likedPosts: number[];
  login: () => void;
  logout: () => void;
  toggleFavourite: (postId: number) => void;
  toggleLike: (postId: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  isLoggedIn: false,

  favouritePosts: [],
  likedPosts: [],

  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),

  toggleFavourite: (postId: number) =>
    set((state) => {
      const isFavourite = state.favouritePosts.includes(postId);

      if (isFavourite) {
        return { favouritePosts: state.favouritePosts.filter((id) => id !== postId) };
      } else {
        return { favouritePosts: [...state.favouritePosts, postId] };
      }
    }),


  toggleLike: (postId: number) =>
    set((state) => {
      const isLiked = state.likedPosts.includes(postId);

      if( isLiked) {
        return { likedPosts: state.likedPosts.filter((id) => id !== postId)};
      } else {
        return { likedPosts: [...state.likedPosts, postId] };
      }
    }),
}));