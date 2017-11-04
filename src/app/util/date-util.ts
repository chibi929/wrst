export class DateUtil {
  /**
   * 日付をフォーマットする
   * @param date Date
   * @param format フォーマット (e.g. YYYY-MM-DD hh:mm:ss)
   * @returns string
   */
  static format(date: Date, fmt: string): string {
    fmt = fmt.replace(/YYYY/g, date.getFullYear().toString());
    fmt = fmt.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    fmt = fmt.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    fmt = fmt.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    fmt = fmt.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    fmt = fmt.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    return fmt;
  }
}
