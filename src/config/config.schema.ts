import * as Joi from 'joi';

export const validationSchema = Joi.object({
  THROTTLE_TTL: Joi.number().default(60).messages({
    'any.required': 'THROTTLE_TTL is required',
    'number.base': 'THROTTLE_TTL must be a number',
  }),
  THROTTLE_LIMIT: Joi.number().default(100).messages({
    'any.required': 'THROTTLE_LIMIT is required',
    'number.base': 'THROTTLE_LIMIT must be a number',
  }),
  MONGO_URI: Joi.string().required().messages({
    'any.required': 'MONGO_URI is required',
    'string.base': 'MONGO_URI must be a string',
  }),
  MONGO_DB: Joi.string().required().messages({
    'any.required': 'MONGO_DB is required',
    'string.base': 'MONGO_DB must be a string',
  }),
  MONGO_USER: Joi.string().required().messages({
    'any.required': 'MONGO_USER is required',
    'string.base': 'MONGO_USER must be a string',
  }),
  MONGO_PASS: Joi.string().required().messages({
    'any.required': 'MONGO_PASS is required',
    'string.base': 'MONGO_PASS must be a string',
  }),
  // ... other environment variables
});
