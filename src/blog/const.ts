export interface BlogType {
  blog_id: number;
  title: string;
  author: string;
  content: string;
  counts: number;
  category: string[];
  comment: CommentType[];
  create_at: Date;
}

export interface CommentType {
  comment_id: number;
  author: string;
  content: string;
  create_at: Date;
}
