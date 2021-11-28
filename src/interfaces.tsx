export interface SearchResult {
  text: string;
  suggestions: Tag[];
}

export interface Tag {
  name: string;
}

export interface Question {
  body: string;
  created_at: string;
  downvote: number;
  id: number;
  response_count: number;
  responses: {}[];
  tagging: number[];
  title: string;
  updated_at: string;
  upvote: number;
  user: any
}

export interface QuestionDetailsObject {
  "id": number;
  "title": string;
  "body": string;
  "upvotes": number;
  "downvotes": number;
  "tagging": Tag[];
  "created_at": string;
  "updated_at": string;
  "responses": Response[];
  "user": User | null;
}

export interface Response {
  body: string;
  user: null | User
  created_at: string;
  upvote: number;
  downvote: number;
  id: number;
}

export interface User {
  username: string;
  title: string;
}

export interface UserDetails {
  username: string;
  title: string;
  id: number;
  created_at: string;
  updated_at: string;
}