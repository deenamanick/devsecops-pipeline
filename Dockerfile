# ──────────────────────────────────────────────────────────
# Stage 1: Build the Vite React application
# ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (layer caching optimisation)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --legacy-peer-deps --ignore-scripts

# Copy the rest of the source code
COPY . .

# Build the production bundle
RUN npm run build

# ──────────────────────────────────────────────────────────
# Stage 2: Serve with Nginx
# ──────────────────────────────────────────────────────────
FROM nginx:alpine AS runtime

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Nginx runs in the foreground
CMD ["nginx", "-g", "daemon off;"]
