import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .min(10, 'password must be at least 10 characters')
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
