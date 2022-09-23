import { CustomError } from "./custom-error";

interface ErrorParams {
  error: string;
  field?: string;
}

export class BadRequestError extends CustomError {
  statusCode: number = 400;

  constructor(public params: ErrorParams) {
    super(params.error);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.params.error, field: this.params.field }];
  }
}
