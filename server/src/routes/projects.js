import { requireRole } from "../rbac.js";

export default async function projectRoutes(app) {
  app.get("/", { preHandler: [app.authenticate, requireRole(["Owner", "Administrator", "Developer", "Employee"]) ] }, async () => {
    return { projects: [] };
  });

  app.post("/", { preHandler: [app.authenticate, requireRole(["Owner", "Administrator", "Employee"]) ] }, async (request) => {
    const { name, description } = request.body || {};
    return { id: "proj_demo", name, description, status: "pending_approval" };
  });
}
