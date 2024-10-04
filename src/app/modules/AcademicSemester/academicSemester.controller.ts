import httpStatus from 'http-status';

import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created succesfully',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemestersFromDB(
    req.query,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Semesters retrieved succesfully',
    meta: result.meta,
    data: result.result,
  });
});

const getSingleSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSingleSemesterFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester retrieved succesfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    id,
    payload,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester updated succesfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllSemesters,
  getSingleSemester,
  updateAcademicSemester,
};
