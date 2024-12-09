import { Test, TestingModule } from '@nestjs/testing';
import { LectureService } from './lecture.service';
import { Lecture } from './schemas/lecture.schema';
import {getModelToken} from '@nestjs/mongoose'
import { Model } from 'mongoose';

describe('LectureService', () => {
  let lectureService: LectureService;
  let model: Model<Lecture>
   
  const mockLecture = {
    "_id": "674d9ba86cd19a69e5b72ce8",
    "lectureName": "Mbarushimana",
    "description": "master in math",
    "materialUrl": "www.course.com",
    
  }


  const mockLectureService = {
    findById:jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LectureService,
        {
          provide:getModelToken(Lecture.name),
          useValue:mockLectureService
        }],
    }).compile();

    lectureService = module.get<LectureService>(LectureService);
    model = module.get<Model<Lecture>>(getModelToken(Lecture.name))
  });

  describe('getLectureById',() =>{
    it('should find and return a Lecture by id', async () =>{
      jest.spyOn(model,'findById').mockResolvedValue(mockLecture)
      const result = await lectureService.getLectureById(mockLecture._id)

      expect(model.findById).toHaveBeenCalledWith(mockLecture._id)
      expect(result).toEqual(mockLecture)
    })
  })
});
