import { integer, pgTable, text, date } from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: text().notNull(),
  content: text().notNull(),
  type: text().notNull(),
});

export const usersTable = pgTable("users", {});
