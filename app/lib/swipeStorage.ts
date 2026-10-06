export const getLikedUsers = () => {
  if (typeof window === "undefined") return [];

  return JSON.parse(
    localStorage.getItem("likedUsers") || "[]"
  );
};

export const saveLikedUser = (
  user: any
) => {
  const existing = getLikedUsers();

  existing.push(user);

  localStorage.setItem(
    "likedUsers",
    JSON.stringify(existing)
  );
};

export const removeLikedUser = (
  id: number
) => {
  const existing = getLikedUsers();

  const filtered = existing.filter(
    (u: any) => u.id !== id
  );

  localStorage.setItem(
    "likedUsers",
    JSON.stringify(filtered)
  );
};