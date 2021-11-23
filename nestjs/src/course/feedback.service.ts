import { Injectable } from '@nestjs/common';
import { StudentFeedback } from '@entities/studentFeedback';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentFeedbackDto } from './dto/create-student-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(StudentFeedback)
    readonly studentFeedbackRepository: Repository<StudentFeedback>,
  ) {}

  public async createStudentFeedback(studentId: number, data: CreateStudentFeedbackDto) {
    return this.studentFeedbackRepository.create({
      studentId,
      content: data.content,
      mentorId: data.mentorId,
      recommendation: data.recommendation,
    });
  }
}
