import { useEffect, useState } from "react";
import "../css/components/CommentSection.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [currentPage, setCurrentPage] = useState(1);

  const COMMENTS_PER_PAGE = 5;

  // === Fetch Comments ===
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setComments(sorted);
      })
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // === Handle Input ===
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // === Submit Comment ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setForm({ name: "", email: "", message: "" });
      setCurrentPage(1);
    }
  };

  // === Pagination ===
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * COMMENTS_PER_PAGE;
  const currentComments = comments.slice(
    startIndex,
    startIndex + COMMENTS_PER_PAGE
  );

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // === Render ===
  return (
    <section className="comment-section">
      <h2 className="comment-title">Comments</h2>

      <div className="comment-container">
        {/* ===== Left: Comment Form ===== */}
        <form className="comment-form" onSubmit={handleSubmit}>
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

        {/* ===== Right: Comment List + Pagination ===== */}
        <div className="comment-right-column">
          <div className="comment-list">
            {currentComments.length > 0 ? (
              currentComments.map((c) => (
                <div key={c.id} className="comment">
                  <p className="comment-header">
                    <strong>{c.name}</strong>{" "}
                    <span className="comment-date">
                      {new Date(c.timestamp).toLocaleString()}
                    </span>
                  </p>
                  <p className="comment-message">{c.message}</p>
                </div>
              ))
            ) : (
              <p className="no-comments">No comments yet.</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={currentPage === i + 1 ? "active" : ""}
                  onClick={() => changePage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
