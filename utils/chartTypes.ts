import { ChartTypeRegistry } from "chart.js/auto";

type ValidChartType = keyof ChartTypeRegistry;
type ChartRefType = HTMLCanvasElement & { chart?: Chart };

type ChartProps = {
  post: Chart;
};

type Chart = {
  chart?: ChartType;
  destroy: Function;
};

type ChartType = {
  label: Dataset;
  datasets: Dataset;
  type: ValidChartType;
  labels: string[];
};

type Dataset = {
  data: string[];
  label: string;
};

export type { ChartProps, Chart, ChartRefType, ValidChartType };
