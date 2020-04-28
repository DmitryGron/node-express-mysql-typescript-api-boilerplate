import * as joi from '@hapi/joi';

export const registerSchema = joi.object({
  register: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().min(6).max(32).required(),
      name: joi.string().required(),
    },
  },
});

export const loginSchema = joi.object({
  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },
});

export const updateSchema = joi.object({
  update: {
    body: {

    },
  },
});

