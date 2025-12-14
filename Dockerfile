# syntax=docker/dockerfile:1

# ---- Builder ----
FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.12.2 --activate

# Instalar dependencias
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

# Copiar solo fuentes necesarias para build
COPY app ./app
COPY components ./components
COPY hooks ./hooks
COPY lib ./lib
COPY public ./public
COPY styles ./styles
COPY next.config.mjs ./next.config.mjs
COPY tsconfig.json ./tsconfig.json
COPY postcss.config.mjs ./postcss.config.mjs
COPY next-env.d.ts ./next-env.d.ts
COPY components.json ./components.json
COPY netlify.toml ./netlify.toml

# Build Next.js (standalone)
ENV NODE_ENV=production
RUN pnpm build

# ---- Runner ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=7272

# Copiar solo lo necesario para runtime standalone
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 7272

CMD ["node", "server.js"]
