# syntax=docker/dockerfile:1

FROM oven/bun:1.3.14-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN --mount=type=cache,target=/root/.bun/install/cache \
	set -eu; \
	bun install --frozen-lockfile

COPY astro.config.mjs tsconfig.json ./
COPY src ./src

RUN bun run build

FROM nginxinc/nginx-unprivileged:1.29-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080
