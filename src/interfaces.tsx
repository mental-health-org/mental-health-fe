//Landing Page types
//some of this data might be shared
export interface SearchResult {
  text: string;
  suggestions: Tag[];
}

export interface Tag {
  // id: number;
  name: string;
}

// export interface Question {
//   id: number;
//   title: string;
//   responses: number;
//   tags: string[];
// }

export interface Question {
  body: string;
  created_at: string;
  downvote: number;
  id: number;
  tagging: number[];
  title: string;
  updated_at: string;
  upvote: number;
}

export interface QuestionDetailsObject {
  "id": number;
  "title": string;
  "body": string;
  "upvote": number;
  "downvote": number;
  "tagging": Tag[];
  "created_at": string;
  "updated_at": string;
}

