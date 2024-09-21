import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemsterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemsterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);
router.patch(
  '/:id',
  validateRequest(
    AcademicSemsterValidations.updateAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);
router.get('/', AcademicSemesterControllers.getAllSemesters);
router.get('/:id', AcademicSemesterControllers.getSingleSemester);

export const AcademicSemesterRoutes = router;
