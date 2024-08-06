
import { LineChart } from '@mui/x-charts/LineChart';
import "./exma.css";

function ExmaOverview() {
  return (
    <div className="zYXW8_summaryContainer">
      <h1 className="aBC12_summaryTitle">Tóm tắt chi phí hàng tháng</h1>
      <div className="dEF34_summaryCard">
        <h2 className="gHI56_summaryCardTitle">Tổng chi tiêu</h2>
        <p className="jKL78_summaryCardAmount">10,000,000 VND</p>
      </div>
      <div className="dEF34_summaryCard">
        <h2 className="gHI56_summaryCardTitle">Ngân sách còn lại</h2>
        <p className="jKL78_summaryCardAmount">5,000,000 VND</p>
      </div>
      <div className="mNO90_categoryAnalysis">
        <h2 className="pQR12_categoryAnalysisTitle">Phân tích theo danh mục</h2>
        <ul className="sTU34_categoryList">
          <li className="vWX56_categoryItem">Thực phẩm: 4,000,000 VND</li>
          <li className="vWX56_categoryItem">Giải trí: 3,000,000 VND</li>
          <li className="vWX56_categoryItem">Giáo dục: 2,000,000 VND</li>
          <li className="vWX56_categoryItem">Khác: 1,000,000 VND</li>
        </ul>
      </div>
      <div className="yZA78_trendAnalysis">
        <h2 className="bCD90_trendAnalysisTitle">Xu hướng chi phí theo thời gian</h2>
        <BasicArea />
      </div>
    </div>
  );
}

function BasicArea() {
    return (
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={500}
          height={300}
        />
      );
}

export default ExmaOverview;
