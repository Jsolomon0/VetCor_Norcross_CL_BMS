export function requireRole(allowed) {
  return async (request, reply) => {
    const user = request.user;
    if (!user || !allowed.includes(user.role)) {
      reply.code(403).send({ error: "Forbidden" });
      return;
    }
  };
}
