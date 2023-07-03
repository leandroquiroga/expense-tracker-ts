import ReactECharts from 'echarts-for-react';
import { useGlobalState } from '../../hooks/useGlobalState';

export const BalanceChart = () => {

    const { categories, arrSerialData } = useGlobalState();
    const options = {
      title: {
        top: "0" ,
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
          top: "25px",
          name: "Balance Total",
          type: "pie",
          radius: "70%",
          center: ["50%", "50%"],
          data: arrSerialData,

          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 5,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
          },
        },
      ],
    };

  return (
    <ReactECharts
      option={options}
    />
  )
};

