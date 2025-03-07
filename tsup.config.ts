import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts", "bin/cli.ts"],
	format: ["cjs", "esm"],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
	outDir: "dist",
});
