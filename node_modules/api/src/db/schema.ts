import { pgTable, text, integer } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: integer("id").primaryKey().notNull(),
  post_title: text("post_title").notNull(),
  post_content: text("post_content").notNull(),
});
