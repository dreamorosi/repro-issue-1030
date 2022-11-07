import { Context } from "aws-lambda";
// Note that the env variable is set before importing the function, which means it's set before `Logger` is initialized
process.env.POWERTOOLS_DEV = "true";
import { handler } from "../lib/powertools-playground.function";

describe("Sample Test", () => {
  test("does stuff", async () => {
    await handler({ test: "ok " }, {} as unknown as Context);
  });
});
