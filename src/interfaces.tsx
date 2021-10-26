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
  response_count: number;
  responses: {}[];
  tagging: number[];
  title: string;
  updated_at: string;
  upvote: number;
  // user: null | UserObjectInQuestion
  user: any
}

// export const interface UserObjectInQuestion {
//   username: string;
//   title: string | null;
// }

export interface QuestionDetailsObject {
  "id": number;
  "title": string;
  "body": string;
  "upvote": number;
  "downvote": number;
  "tagging": Tag[];
  "created_at": string;
  "updated_at": string;
  "responses": Response[];
}

export interface Response {
  body: string;
  user: null | number| string;
  created_at: string;

}
//{body: 'comment', user: null, created_at: '2021-10-25T20:57:22.055493Z'}
