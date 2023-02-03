/* eslint-disable no-console */
export default class Logger {
  static warn(msg: string) {
    console.warn(`[Warn] ${msg}`);
  }

  static error(msg: string) {
    console.error(`[Error] ${msg}`);
  }

  static log(msg: string) {
    console.log(`[Log] ${msg}`);
  }
}
