# DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
# Copyright (c) 2017 Oracle and/or its affiliates. All rights reserved.
# GlassFish on Docker with Oracle Linux and OpenJDK
#FROM payara/server-full
FROM payara/micro

#COPY shared/domain.xml /opt/payara41/glassfish/domains/domain1/config/domain.xml

#COPY shared/libraries/jboss-logging-3.3.0.Final.jar /opt/payara41/glassfish/modules/jboss-logging.jar

#COPY shared/libraries/* /opt/payara41/glassfish/domains/domain1/lib/

COPY microservice-3-1.0.war /opt/payara/deployments/microservice-3-1.0.war

#COPY shared/domain.xml /opt/payara/domain.xml

COPY libraries/payara-micro.jar /opt/payara/payara-micro.jar

COPY libraries/postgresql-42.1.1.jar /opt/jdbc/postgresql-42.1.1.jar

# Ports being exposed
EXPOSE 4848 8080 8181 9009

# Start asadmin console and the domain
#CMD ["bin/asadmin", "start-domain", "-v", "-d"]
#CMD ["java", "-cp", "/opt/jdbc/postgresql-42.1.1.jar", "-jar", "/opt/payara/payara-micro.jar", "--deploymentDir", "/opt/payara/deployments"]
CMD ["java", "-cp", "/opt/jdbc/postgresql-42.1.1.jar:/opt/payara/payara-micro.jar", "fish.payara.micro.PayaraMicro", "--deploymentDir", "/opt/payara/deployments"]