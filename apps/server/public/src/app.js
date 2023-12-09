"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const cors_1 = require("hono/cors");
const logger_1 = require("hono/logger");
const auth_controller_1 = require("./modules/auth/auth.controller");
const orgs_controller_1 = require("./modules/orgs/orgs.controller");
const error_filter_1 = require("./middlewares/error-filter");
const app = new hono_1.Hono().basePath('/api');
app.use('*', (0, logger_1.logger)());
app.use('*', (0, cors_1.cors)({
    origin: ['http://localhost:5173'],
    credentials: true,
}));
app.route('/', auth_controller_1.router);
app.route('/orgs', orgs_controller_1.router);
app.notFound((c) => c.json({ status: 404, message: 'Not found' }, 404));
app.onError(error_filter_1.errorFilter);
exports.default = app;
//# sourceMappingURL=app.js.map