export default function PostCard({ title, content, location }) {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
      {location && (
        <p><strong>Location:</strong> {location}</p>
      )}
    </div>
  );
}
