/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { spinner } from "../../../utils";

export const execute = async (options: any, config: any) => {
  if (!options.verbose) {
    spinner.start("Cleaning the app");

    //@ts-ignore
    process.stdout.write = function () {};
  }
};