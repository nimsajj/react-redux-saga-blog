import { schema } from "normalizr";

export const articleSchema = new schema.Entity("articles");
export const articlesSchema = new schema.Array(articleSchema);

export const userSchema = new schema.Entity("users", {
  articles: articlesSchema,
});

export const usersSchema = new schema.Array(userSchema);
