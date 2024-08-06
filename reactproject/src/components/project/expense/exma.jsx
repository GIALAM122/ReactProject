

function Exma() {
  return (
    <div className="expense-container">
      <h1 className="expense-title">Quản lý chi phí</h1>
      <form id="expense-form" className="expense-form">
        <div className="form-group">
          <label htmlFor="description" className="form-label">Mô tả</label>
          <input type="text" id="description" name="description" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="form-label">Ngày tháng</label>
          <input type="date" id="date" name="date" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">Số tiền</label>
          <input type="number" id="amount" name="amount" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Danh mục</label>
          <select id="category" name="category" className="form-input" required>
            <option value="Tiền thuê nhà">Tiền thuê nhà</option>
            <option value="Cửa hàng tạp hóa">Cửa hàng tạp hóa</option>
            <option value="Phương tiện đi lại">Phương tiện đi lại</option>
          </select>
        </div>
        <button type="submit" className="form-button">Thêm chi phí</button>
      </form>
      <div className="expense-list-container">
        <h2 className="expense-list-title">Danh sách chi phí</h2>
        <ul id="expenses" className="expense-list"></ul>
      </div>
    </div>
  );
}

export default Exma;
