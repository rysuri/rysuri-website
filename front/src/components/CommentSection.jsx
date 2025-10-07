import { useEffect, useState } from "react";
import "../css/components/CommentSection.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  // Fetch all comments
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`)
      .then((res) => res.json())
      .then((data) => {
        // Sort newest first
        const sorted = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setComments(sorted);
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit a new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newComment = await res.json();
      // Add new comment at the start
      setComments([newComment, ...comments]);
      setForm({ name: "", email: "", message: "" });
      setCurrentPage(1); // Go to first page since newest is at top
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const startIndex = (currentPage - 1) * commentsPerPage;
  const currentComments = comments.slice(
    startIndex,
    startIndex + commentsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="comment-section">
      <h2 className="header">Comments</h2>

      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write a comment..."
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>

      <div className="comment-list">
        {currentComments.map((c) => (
          <div key={c.id} className="comment">
            <p>
              <strong>{c.name}</strong> (
              {new Date(c.timestamp).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              @{" "}
              {new Date(c.timestamp).toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
              )
            </p>
            <p className="message">{c.message}</p>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default CommentSection;
