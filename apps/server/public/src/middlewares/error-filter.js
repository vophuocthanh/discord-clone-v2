"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorFilter = void 0;
const errorFilter = async (error, c) => {
    console.error(error);
    return c.json({
        status: 500,
        message: 'Something went wrong',
    }, 500);
};
exports.errorFilter = errorFilter;
//# sourceMappingURL=error-filter.js.map