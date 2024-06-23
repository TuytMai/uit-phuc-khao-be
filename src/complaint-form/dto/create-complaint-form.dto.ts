import { EComplaintStatus } from "../entities/complaint-form.entity";

export class CreateComplaintFormDto {
  lyDo: string;
  lyDoTuChoi: string;
  tinhTrang: EComplaintStatus;
  studentId: string;
  testScoreEntityId: string;
}
