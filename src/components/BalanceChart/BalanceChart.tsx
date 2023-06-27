import ReactECharts from 'echarts-for-react';
import { useGlobalState } from '../../hooks/useGlobalState';

export const BalanceChart = () => {

    const { categories, arrSerialData } = useGlobalState();
    const options = {
      title: {
        left: "10px",
        text: "Dashboard",
        subtext: "Balance Total",
        x: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        orient: "horizontal",
        bottom: "-6px",
        data: categories,
      },
      series: [
        {
          name: "Balance Total",
          type: "pie",
          radius: "70%",
          center: ["50%", "50%"],
          data: arrSerialData,

          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

  return <ReactECharts option={options} />;
};

