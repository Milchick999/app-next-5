'use server'

import { Post } from '@/types/post';
import { CommentsResponse } from '@/types/comment';

const BASE_URL = 'https://dummyjson.com';

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts?limit=30`);
  if (!res.ok) throw new Error('Fetch posts error');
  const data = await res.json();
  return data.posts;
}

export async function getPostById(id: string): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error('Load post Error');
  return res.json();
}

export async function getCommentsByPostId(id: string): Promise<CommentsResponse> {
  const res = await fetch(`${BASE_URL}/posts/${id}/comments`);
  if (!res.ok) throw new Error('Load comment Error');
  return res.json();
}