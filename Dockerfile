FROM kyma/docker-nginx
COPY buildProd/ /var/www
CMD 'nginx'
