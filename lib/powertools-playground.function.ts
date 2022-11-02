import {
  Metrics,
  logMetrics,
  MetricUnits,
} from "@aws-lambda-powertools/metrics";
import middy from "@middy/core";

const metrics = new Metrics({ namespace: "someName" });

const middlewares = [logMetrics(metrics)];

export const handler = middy(async () => {
  metrics.addMetric("successfulBooking", MetricUnits.Count, 1);

  throw new Error("error");
}).use(middlewares);
