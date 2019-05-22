FROM ubuntu:latest

# Install apache, and supplimentary programs. openssh-server, curl, and lynx-cur are for debugging the container.
RUN apt-get update && apt-get -y upgrade && DEBIAN_FRONTEND=noninteractive apt-get -y install \
    apache2 curl


# Create symlinks
RUN mkdir -p /var/www/mcp/
RUN ln -s /ifs/web/www/docs/files /var/www/mcp/files

# Manually set up the apache environment variables
ENV APACHE_RUN_USER www-data
ENV APACHE_RUN_GROUP www-data
ENV APACHE_LOG_DIR /var/log/apache2
ENV APACHE_LOCK_DIR /var/lock/apache2
ENV APACHE_PID_FILE /var/run/apache2.pid

# Copy config files
COPY apache2.conf /opt/apache2.conf
RUN cat /opt/apache2.conf >> /etc/apache2/apache2.conf

EXPOSE  80

#Launch Apache2 on FOREGROUND
COPY apache-start.sh /opt/
RUN chmod +x /opt/apache-start.sh
ENTRYPOINT ["/opt/apache-start.sh"]
