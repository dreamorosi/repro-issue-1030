import { Construct } from "constructs";
import { Tracing } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class PowertoolsPlayground extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new NodejsFunction(this, "function", {
      tracing: Tracing.ACTIVE,
    });
  }
}
