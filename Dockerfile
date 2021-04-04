FROM node:alpine AS builder
WORKDIR /workspace

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /workspace/build /usr/share/nginx/html
