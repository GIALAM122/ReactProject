import "../astyle/home.css";
import { LineChart } from '@mui/x-charts/LineChart';

function Home() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G', 
  ];

  return (
    <>
      <div className="container1">
        <h1>Website quản lý chi tiêu</h1>
        <p>
          Choose expense management software that shows you employee expenses in real time. Monitor team budgets, track requests and approvals, reimburse expenses, and eliminate admin.
        </p>
        <div className="button-group">
          <button className="btn btn-primary">Getting Started</button>
          <button className="btn btn-secondary">Detail</button>
        </div>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: pData, label: 'pv', yAxisKey: 'leftAxisId' },
            { data: uData, label: 'uv', yAxisKey: 'rightAxisId' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
          rightAxis="rightAxisId"
        />
      </div>
    </>
  );
}

export default Home;
