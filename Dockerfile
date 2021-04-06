# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /avzeus-frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 本番環境
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /avzeus-frontend/dist /usr/share/nginx/html
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
ENV API_URL http://backend:8000
ENV API_URL_BROWSER http://localhost:8000
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
