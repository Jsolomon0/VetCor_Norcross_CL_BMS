import { createPathAccessMiddleware } from "../../packages/auth/src/server/index.ts";
import { DASHBOARD_PROTECTED_ROUTES } from "../../packages/auth/src/shared/index.ts";

export const dashboardMiddleware = createPathAccessMiddleware(DASHBOARD_PROTECTED_ROUTES, {
  signInPath: "/login",
  forbiddenPath: "/forbidden"
});
