import { useEffect, useState } from "react";
import "../css/components/CommentSection.css";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Fetch all comments
  useEffect(() => {
    fetch("http://localhost:5000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error fetching comments:", err));
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit a new comment
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      const newComment = await res.json();
      setComments([...comments, newComment]);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
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
        {comments.map((c) => (
          <div key={c.id} className="comment">
            <p>
              <strong>{c.name}</strong> (
              {new Date(c.timestamp).toLocaleString()})
            </p>
            <p>{c.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
