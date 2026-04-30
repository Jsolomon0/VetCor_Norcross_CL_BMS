import { createPathAccessMiddleware } from "../../packages/auth/src/server/index.ts";
import { PORTAL_PROTECTED_ROUTES } from "../../packages/auth/src/shared/index.ts";

export const portalMiddleware = createPathAccessMiddleware(PORTAL_PROTECTED_ROUTES, {
  signInPath: "/sign-in",
  forbiddenPath: "/access-denied"
});
