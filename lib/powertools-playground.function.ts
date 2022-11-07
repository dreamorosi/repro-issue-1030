import { Logger, injectLambdaContext } from "@aws-lambda-powertools/logger";
import middy from "@middy/core";

const logger = new Logger({ serviceName: "someName" });

class MyCustomError extends Error {
  public foo: string;

  constructor(message: string) {
    super(message);
    this.foo = "bar";
  }
}

export const handler = middy(async () => {
  logger.info("I'm a log entry");
  try {
    throw new MyCustomError("error");
  } catch (err) {
    if (err instanceof MyCustomError) {
      logger.error("some error", err);
    }
  }
}).use(injectLambdaContext(logger));
