import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { StudentRoutes } from '../modules/Student/student.route';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
