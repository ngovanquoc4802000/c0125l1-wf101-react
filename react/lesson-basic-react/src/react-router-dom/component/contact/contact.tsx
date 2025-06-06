import "../../assest/styles/global.css";
function Contact() {
  return (
    <div className="container page-section">
      <h1>Liên hệ</h1>
      <p>
        Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng điền vào biểu mẫu dưới đây
        hoặc liên hệ trực tiếp với chúng tôi.
      </p>
      <form
        style={{
          maxWidth: "500px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid var(--border-color)",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Tên của bạn:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Tin nhắn:</label>
          <textarea id="message" name="message"  required></textarea>
        </div>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}

export default Contact;
