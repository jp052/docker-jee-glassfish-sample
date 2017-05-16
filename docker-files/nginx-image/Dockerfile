FROM nginx

COPY shared/conf.d/default.conf etc/nginx/conf.d/default.conf
COPY shared/html/ usr/share/nginx/html/

EXPOSE 80

STOPSIGNAL SIGQUIT

CMD ["nginx", "-g", "daemon off;"]