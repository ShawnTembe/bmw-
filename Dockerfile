FROM nginx:1.17.1-alpine
COPY /dist/bmw-retailers /usr/share/nginx/html
