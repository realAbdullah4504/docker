FROM nginx:alpine

# Copy custom nginx config
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./conf /etc/nginx/conf.d

# VOLUME [ "/data" ]

# Copy static files
# COPY ../react/build /usr/share/nginx/react

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
