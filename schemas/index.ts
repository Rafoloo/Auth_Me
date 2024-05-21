import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "É necessário digitar um email"
    }),
    password: z.string().min(1, {
        message: "É necessário digitar uma senha"
    }),
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "É necessário digitar um email"
    }),
    password: z.string().min(8, {
        message: "Digite no mínimo 8 caracteres"
    }),
    name: z.string().min(8, {
        message: "Digite seu nome completo"
    })
});