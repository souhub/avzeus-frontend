# ビルド環境
FROM node:lts-alpine as build-stage
WORKDIR /avzeus-frontend
COPY package*.json ./
RUN npm install
COPY . .
# APIのパス指定
ENV VUE_APP_API_ENDPOINT https://avzeus-api-test.mmu6fa6rgrojg.ap-northeast-1.cs.amazonlightsail.com
RUN npm run build

# 本番環境
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /avzeus-frontend/dist /usr/share/nginx/html
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
