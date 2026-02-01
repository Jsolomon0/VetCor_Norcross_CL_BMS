import { requireRole } from "../rbac.js";

export default async function authRoutes(app) {
  app.post("/login", async (request, reply) => {
    const { email, password } = request.body || {};

    if (!email || !password) {
      return reply.code(400).send({ error: "Missing credentials" });
    }

    const user = { id: "demo", email, role: "Owner" };
    const token = app.jwt.sign(user);
    return { access_token: token, user };
  });

  app.post("/logout", async () => ({ ok: true }));
}
