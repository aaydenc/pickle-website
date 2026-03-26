import {
  pgTable,
  text,
  serial,
  boolean,
  smallint,
  timestamp,
} from "drizzle-orm/pg-core";

export const posts = pgTable("posts", {
  id: serial("id").primaryKey().notNull(),
  post_title: text("title").notNull(),
  post_content: text("content").notNull(),
  type: text("type").notNull(),
  published: boolean("published").default(false),
  user_id: smallint("user_id").notNull(),
  time_posted: timestamp("time_posted").defaultNow(),
});
