import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import rateLimit from "@fastify/rate-limit";
import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import healthRoutes from "./routes/health.js";

const app = Fastify({ logger: true });

await app.register(cors, {
  origin: process.env.CORS_ORIGIN || true,
  credentials: true
});

await app.register(rateLimit, {
  max: 100,
  timeWindow: "1 minute"
});

await app.register(jwt, {
  secret: process.env.JWT_SECRET || "dev-secret"
});

app.decorate("authenticate", async (request, reply) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.code(401).send({ error: "Unauthorized" });
  }
});

app.register(healthRoutes, { prefix: "/health" });
app.register(authRoutes, { prefix: "/auth" });
app.register(projectRoutes, { prefix: "/projects" });

const port = Number(process.env.PORT) || 3000;

app.listen({ port, host: "0.0.0.0" }).catch((err) => {
  app.log.error(err);
  process.exit(1);
});
