"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const password_1 = require("../../utils/password");
const db_1 = require("../../../prisma/db");
class AuthService {
    static async signIn(email, password) {
        const user = await db_1.db.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error(`User ${email} not found`);
        }
        const isValid = (await password) + user.salt === user.password;
        if (!isValid) {
            throw new Error(`Invalid password`);
        }
        return '12312321321';
    }
    static async signUp(email, password) {
        const user = await db_1.db.user.findUnique({
            where: {
                email: email,
            },
        });
        if (user) {
            throw new Error(`User ${email} already exists`);
        }
        const salt = '124124';
        const hashedPassword = (0, password_1.hashPassword)(password, salt);
        const newUser = await db_1.db.user.create({
            data: {
                email: email,
                password: hashedPassword,
                salt: salt,
            },
        });
        return newUser;
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map