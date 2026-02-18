export interface Comment {
  id: number;
  body: string;
  likes: number;
  user: {
    username: string;
    fullName: string;
  };
}

export interface CommentsResponse {
  comments: Comment[];
  total: number;
}