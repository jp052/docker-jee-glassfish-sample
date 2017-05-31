# DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
# Copyright (c) 2017 Oracle and/or its affiliates. All rights reserved.
# GlassFish on Docker with Oracle Linux and OpenJDK
FROM oraclelinux:latest

# Maintainer
MAINTAINER Arindam Bandyopadhyay<arindam.bandyopadhyay@oracle.com>

# Set environment variables and default password for user 'admin'
ENV GLASSFISH_PKG=glassfish-4.1.2.zip \
    GLASSFISH_URL=http://download.oracle.com/glassfish/4.1.2/release/glassfish-4.1.2.zip \
    GLASSFISH_HOME=/glassfish4 \
    MD5=9a37928ea6e54334101b8a89e03a8d7d \
    PATH=$PATH:/glassfish4/bin \
    JAVA_HOME=/usr/lib/jvm/java-openjdk

# Install packages, download and extract GlassFish
# Setup password file
# Enable DAS
RUN yum -y install wget unzip java-1.8.0-openjdk-devel && \
    wget --quiet --no-check-certificate $GLASSFISH_URL && \
    echo "$MD5 *$GLASSFISH_PKG" | md5sum -c - && \
    unzip -o $GLASSFISH_PKG && \
    rm -f $GLASSFISH_PKG && \
    yum -y remove wget unzip && rm -rf /var/cache/yum/*

# COPY shared/domain.xml glassfish4/glassfish/domains/domain1/config/domain.xml

COPY shared/imqbrokerd.conf /glassfish4/mq/etc/imqbrokerd.conf

#Execute Glassfish configs
COPY glassfish-custom-config.sh /glassfish-custom-config.sh
RUN ["chmod", "+x", "glassfish-custom-config.sh"]
RUN /glassfish-custom-config.sh

#COPY docker-entrypoint.sh /entrypoint.sh
#RUN ["chmod", "+x", "entrypoint.sh"]
#ENTRYPOINT ["/entrypoint.sh"]

# Ports being exposed
EXPOSE 4848 8080 8181 7676 9009

# Start asadmin console and the domain
CMD ["asadmin", "start-domain", "-v", "-d"]
