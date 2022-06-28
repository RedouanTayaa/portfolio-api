export class CreateWorkDto {
  dateStart: string;
  dateEnd: string;
  title: string;
  company: string;
  city: string;
  description: string;
  tags: Array<string> = [];
}
