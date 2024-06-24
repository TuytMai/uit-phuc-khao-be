import { ReviewBoardEntity } from 'src/review-board/entities/review-board.entity';

export type AuthenticatedReviewBoardRequest = {
  user: ReviewBoardEntity;
} & Request;
