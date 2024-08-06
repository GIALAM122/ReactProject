
function Exmaseting() {
  return (
    <div className="xbvT43_budgetContainer">
      <h1 className="JhgY68_budgetTitle">Ngân sách hàng tháng</h1>
      <form id="budget-form" className="mjkK20_budgetForm">
        <div className="NkLr84_formGroup">
          <label htmlFor="food" className="LpNq12_formLabel">Thực phẩm</label>
          <input type="number" id="food" name="food" className="BvCr45_formInput" placeholder="Nhập số tiền" required />
        </div>
        <div className="NkLr84_formGroup">
          <label htmlFor="entertainment" className="LpNq12_formLabel">Giải trí</label>
          <input type="number" id="entertainment" name="entertainment" className="BvCr45_formInput" placeholder="Nhập số tiền" required />
        </div>
        <div className="NkLr84_formGroup">
          <label htmlFor="education" className="LpNq12_formLabel">Giáo dục</label>
          <input type="number" id="education" name="education" className="BvCr45_formInput" placeholder="Nhập số tiền" required />
        </div>
        <button type="submit" className="QwZx23_formButton">Lưu ngân sách</button>
      </form>
    </div>
  );
}

export default Exmaseting;
