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
  label: Dataset<string & number>;
  datasets: Dataset<string & number>;
  type: ValidChartType;
  labels: string[];
};

type Dataset<T> = {
  data: T[];
  label: string;
};

export type { ChartProps, Chart, ChartRefType, ValidChartType };
