import { pgTable, text, serial } from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey().notNull(),
  post_title: text("post_title").notNull(),
  post_content: text("post_content").notNull(),
  type: text("type").notNull(),
});
