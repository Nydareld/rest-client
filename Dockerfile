FROM nginx:stable-alpine
COPY buildProd/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
