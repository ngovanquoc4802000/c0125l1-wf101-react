function ProfileSetting() {
  return (
    <div>
      <h3>Cài đặt tài khoản</h3>
      <form>
        <div className="form-group">
          <label htmlFor="language">Ngôn ngữ:</label>
          <select id="language">
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </div>
        <div
          className="form-group"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            type="checkbox"
            id="notifications"
            style={{ width: "auto", marginRight: "10px" }}
          />
          <label htmlFor="notifications" style={{ marginBottom: "0" }}>
            Nhận email thông báo
          </label>
        </div>
        <button type="submit">Lưu cài đặt</button>
      </form>
    </div>
  );
}

export default ProfileSetting;
