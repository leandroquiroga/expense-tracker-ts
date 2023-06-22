import ReactECharts from 'echarts-for-react';
import { useGlobalState } from '../../hooks/useGlobalState';

export const BalanceChart = () => {

    const { categories } = useGlobalState();
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
        bottom: "0",
        data: categories,
      },
      series: [
        {
          name: "Balance Total",
          type: "pie",
          radius: "80%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "Sueldo" },
            { value: 310, name: "Gastos Extas" },
            { value: 234, name: "Inversiones" },
            { value: 135, name: "Facturas" },
            { value: 1548, name: "Gastos Personales" },
            { value: 100, name: "Alimentos" },
            { value: 530, name: "Otros" },
          ],
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

