import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);
  const a = req.query.a || (req.body && req.body.a);
  const b = req.query.b || (req.body && req.body.b);

  const responseMessage =
    name && a && b
      ? `Hello, ${name}. This HTTP triggered function executed successfully! The result of a + b is ${
          parseInt(a) + parseInt(b)
        }`
      : `This HTTP triggered function executed successfully. Pass a string "name", number "a" and number "b" in the query string or in the request body for a proper response."`;

  context.res = {
    status: 200,
    body: responseMessage,
  };
};

export default httpTrigger;
