import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const nextPackageDir = path.dirname(require.resolve("next/package.json"));
const nextServerRuntime = path.relative(
  __dirname,
  path.join(nextPackageDir, "dist/compiled/next-server/server.runtime.prod.js")
);
const nextServerRuntimeSourceMap = path.relative(
  __dirname,
  path.join(nextPackageDir, "dist/compiled/next-server/server.runtime.prod.js.map")
);

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true
  },
  outputFileTracingRoot: path.join(__dirname, "../../"),
  outputFileTracingIncludes: {
    "/*": [
      nextServerRuntime,
      nextServerRuntimeSourceMap
    ]
  }
};

export default nextConfig;
