export async function fetchPosts() {
  const res = await fetch("/api/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}
