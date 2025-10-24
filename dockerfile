FROM node:22.13.1-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

FROM node:22.13.1-alpine AS runner
WORKDIR /app
# Copy built app from builder
COPY --from=builder /app/dist/angular-tutorial ./dist/angular-tutorial
# Copy package.json and package-lock.json for production install
COPY package*.json ./
RUN npm install --omit=dev --ignore-scripts

# Expose the port the server listens on
EXPOSE 4000

# Start the SSR server
CMD ["node", "dist/angular-tutorial/server/server.mjs"]