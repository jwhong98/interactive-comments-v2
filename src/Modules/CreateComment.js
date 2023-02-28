export const CreateComment = (comment, user) => {
  const id = Math.random();
  return {
    id: id,
    content: comment,
    createdAt: "Just Now",
    score: 0,
    user: {
      image: {
        webp: user.image.webp,
      },
      username: user.username,
    },
    replies: [],
  };
};
