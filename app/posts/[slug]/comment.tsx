const Comments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 2-second delay

  return <div>Comments Section Content</div>;
};

export default Comments;
