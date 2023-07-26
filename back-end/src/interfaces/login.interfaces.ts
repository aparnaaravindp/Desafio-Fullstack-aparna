import { z } from "zod";
import {
  loginRequestSchema,
  loginResponseSchema,
} from "../schemas/login.schemas";

type TLoginRequest = z.infer<typeof loginRequestSchema>;

type TLoginResponse = z.infer<typeof loginResponseSchema>;

export { TLoginRequest, TLoginResponse };
