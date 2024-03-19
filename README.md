# vitest-non-root-monorepo

I have a monorepo with a few components. There's a tool written in Python, and a
project which uses that tool, which is written in TypeScript. I want to use
`vitest` in the TypeScript component, but not in the Python tool.

I don't want to install `vitest` at the monorepo root, but in the shared root of
the TypeScript components.
