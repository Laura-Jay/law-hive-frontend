export interface PostInterface {
  id: number;
  title: string;
  description: string;
  state: "Started" | "Paid";
  creationDate: Date;
}

export interface CreatePostInterface {
  title: string;
  description: string;
  state: "Started" | "Paid";
}
