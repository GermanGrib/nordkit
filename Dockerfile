FROM node:lts AS build
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NEXT_PUBLIC_BASE_PATH="/"
WORKDIR /app

COPY ../../../nordkit_git/next .
RUN npm ci --legacy-peer-deps && npm run build

EXPOSE 3000

CMD ["npm", "start"]

# FROM nginx:1.25.4-alpine3.18

# RUN rm /etc/nginx/conf.d/default.conf

# COPY --from=build /app/nginx /etc/nginx/conf.d/
# COPY --from=build /app/build /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]