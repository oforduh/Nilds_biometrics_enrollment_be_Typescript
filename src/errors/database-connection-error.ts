import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error connecting to the database";
  constructor() {
    super("");

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

// export class DatabaseConnectionError extends CustomError {
//   statusCode = 200;
//   // reason = "Ofordu connecting to the database";
//   constructor(public params: string) {
//     super(params);

//     // Only because we are extending a built in class
//     Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
//   }

//   serializeErrors() {
//     return [{ message: this.params }];
//   }
// }
