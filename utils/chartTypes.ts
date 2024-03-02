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
  label: string;
  data: string[] | number[];
  type: ValidChartType;
  labels: string[];
};

export type { ChartProps, Chart, ChartRefType, ValidChartType };
