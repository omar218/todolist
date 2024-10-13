FROM nginx 

COPY css /usr/share/nginx/css
COPY js /usr/share/nginx/js
COPY index.html /usr/share/nginx/index.html 

