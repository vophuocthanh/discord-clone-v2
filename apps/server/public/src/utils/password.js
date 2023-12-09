"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const hashPassword = (password, salt) => {
    return password + salt;
};
exports.hashPassword = hashPassword;
//# sourceMappingURL=password.js.map