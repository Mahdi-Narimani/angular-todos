export interface ITodoModel {
  id: string;
  title: string;
  dateTime: string;
  startTime?: Date;
  endTime?: Date;
  description?: string;
}
