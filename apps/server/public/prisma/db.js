"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const edge_1 = require("@prisma/client/edge");
const extension_accelerate_1 = require("@prisma/extension-accelerate");
exports.db = new edge_1.PrismaClient().$extends((0, extension_accelerate_1.withAccelerate)());
//# sourceMappingURL=db.js.map