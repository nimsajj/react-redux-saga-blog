import { schema } from "normalizr";

export const usersSchema = new schema.Array(
  new schema.Entity("users", {
    articles: new schema.Array(new schema.Entity("articles")),
  })
);

export const postSchema = new schema.Entity("articles", {
  author: new schema.Entity("users"),
});
export const postsShema = new schema.Array(postSchema);
