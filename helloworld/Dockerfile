FROM node:12

RUN apt-get update && apt-get install -y \
  nginx \
  tree \
  net-tools

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/
RUN npm install
RUN npm run build
RUN cp -R dist/ /var/www/html
RUN cp index.html /var/www/html/index.html
RUN rm /var/www/html/index.nginx-debian.html

WORKDIR /var/www/html
RUN tree .


ENTRYPOINT /etc/init.d/nginx restart && /bin/bash
