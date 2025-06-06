import { userPosts } from "../../data";

function ProfilePost() {
  return (
    <div>
      <h3>Các bài viết của tôi</h3>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
            }}
          >
            <h4 style={{ marginBottom: "5px", color: "var(--primary-color)" }}>
              {post.title}
            </h4>
            <p style={{ fontSize: "0.95rem", color: "var(--text-color)" }}>
              {post.content}
            </p>
          </div>
        ))
      ) : (
        <p>Bạn chưa có bài viết nào.</p>
      )}
    </div>
  );
}

export default ProfilePost;
