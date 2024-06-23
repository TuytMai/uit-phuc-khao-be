import { EReviewStatus } from "../entities/test-score-review-form.entity";

export class CreateTestScoreReviewFormDto {
  maLop: string;
  ngayThi: Date;
  phongThi: string;
  caThi: string;
  lyDo: string;
  lyDoTuChoi: string;
  ngayDangKy: Date;
  nguoiPhucKhao: string;
  tinhTrang: EReviewStatus;
  studentId: string;
  testScoreId: string;
  trainningDepartmentId: string;
}
