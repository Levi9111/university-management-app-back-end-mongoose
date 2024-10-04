import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import { catchAsync } from '../../utils/catchAsync';
import { OK } from 'http-status';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserServices.createFacultyIntoDB(password, facultyData);

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;

  const result = await UserServices.createAdminIntoDB(password, adminData);

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

const changeStatus = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await UserServices.changeStatus(id, req.body);

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: `Status Updated succesfully`,
    data: result,
  });
});

const getMe = catchAsync(async (req, res) => {
  const { userId, role } = req.user;

  const result = await UserServices.getMe(userId, role);

  sendResponse(res, {
    statusCode: OK,
    success: true,
    message: `${role} retrieved succesfully`,
    data: result,
  });
});

export const UserControllers = {
  createStudent,
  createFaculty,
  createAdmin,
  changeStatus,
  getMe,
};
