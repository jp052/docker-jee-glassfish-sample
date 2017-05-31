#!/bin/bash
# DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
#
# Copyright (c) 2017 Oracle and/or its affiliates. All rights reserved.
if [[ -z $ADMIN_PASSWORD ]]; then
	ADMIN_PASSWORD="password"
	echo "##########GENERATED ADMIN PASSWORD: $ADMIN_PASSWORD  ##########"
fi
echo "AS_ADMIN_PASSWORD=" > /tmp/glassfishpwd
echo "AS_ADMIN_NEWPASSWORD=${ADMIN_PASSWORD}" >> /tmp/glassfishpwd
asadmin --user=admin --passwordfile=/tmp/glassfishpwd change-admin-password --domain_name domain1
asadmin start-domain
echo "AS_ADMIN_PASSWORD=${ADMIN_PASSWORD}" > /tmp/glassfishpwd
asadmin --user=admin --passwordfile=/tmp/glassfishpwd --port 4848 enable-secure-admin


# connection pool für problem-db (postgres)
asadmin --user=admin --passwordfile=/tmp/glassfishpwd create-jdbc-connection-pool --datasourceclassname org.postgresql.ds.PGConnectionPoolDataSource --restype javax.sql.ConnectionPoolDataSource --property portNumber=5432:user=docker:password=docker:serverName=192.168.99.100:databaseName=docker problem_pool
asadmin --user=admin --passwordfile=/tmp/glassfishpwd create-jdbc-resource --connectionpoolid problem_pool jdbc/problem_pool

# JMS physical destination / host / queue
asadmin --user=admin --passwordfile=/tmp/glassfishpwd create-jmsdest --desttype queue MessageQueueDestination
asadmin --user=admin --passwordfile=/tmp/glassfishpwd set server-config.jms-service.jms-host.default_JMS_host.host=localhost
asadmin --user=admin --passwordfile=/tmp/glassfishpwd set server-config.jms-service.start-args="-startRmiRegistry -rmiRegistryPort 34000 -Dimq.jms.tcp.port=43320"
asadmin --user=admin --passwordfile=/tmp/glassfishpwd create-jms-resource --restype javax.jms.Queue --property Name=MessageQueueDestination jms/queue/MeldungQueue


# jms server on this machine
# asadmin --user=admin --passwordfile=/tmp/glassfishpwd create-jms-host --mqhost 192.168.99.100 --mqport 7676 --mquser admin --mqpassword admin JMS_PQM_Host
# asadmin --user=admin --passwordfile=/tmp/glassfishpwd set configs.config.server-config.jms-service.default-jms-host=JMS_PQM_Host
# asadmin --user=admin --passwordfile=/tmp/glassfishpwd delete-jms-host default_JMS_host

asadmin --user=admin stop-domain
rm /tmp/glassfishpwd
