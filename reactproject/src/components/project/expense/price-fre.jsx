 
function PriceFre() {
  return (
    <div className="c4s7g3-rx2w4">
      <h1 className="f9t1k8-zh5p2">Thêm Chi Phí Định Kỳ</h1>
      <form className="y8p4b7-vx3d6">
        <div className="a5n2d1-qw8r0">
          <label htmlFor="description" className="j3w7x9-ev1l5">Mô tả:</label>
          <input type="text" id="description" name="description" placeholder="Nhập mô tả chi phí" className="k9z3p6-xu8m1" required />
        </div>
        <div className="a5n2d1-qw8r0">
          <label htmlFor="amount" className="j3w7x9-ev1l5">Số tiền:</label>
          <input type="number" id="amount" name="amount" placeholder="Nhập số tiền" className="k9z3p6-xu8m1" required />
        </div>
        <div className="a5n2d1-qw8r0">
          <label htmlFor="start-date" className="j3w7x9-ev1l5">Ngày bắt đầu:</label>
          <input type="date" id="start-date" name="start-date" className="k9z3p6-xu8m1" required />
        </div>
        <div className="a5n2d1-qw8r0">
          <label htmlFor="end-date" className="j3w7x9-ev1l5">Ngày kết thúc:</label>
          <input type="date" id="end-date" name="end-date" className="k9z3p6-xu8m1" required />
        </div>
        <button type="submit" className="m8c4p1-lb7x9">Thêm Chi Phí</button>
      </form>
    </div>
  );
}

export default PriceFre;
