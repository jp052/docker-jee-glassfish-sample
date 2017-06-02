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

# JMS physical destination	/ host / queue
asadmin create-jmsdest --desttype queue --property User=admin:Password=password MessageQueueDestination
asadmin set server-config.jms-service.jms-host.default_JMS_host.host=192.168.99.101
asadmin set server-config.jms-service.type=REMOTE
asadmin set server-config.jms-service.start-args="-startRmiRegistry -rmiRegistryPort 34000 -Dimq.jms.tcp.port=43320"
asadmin create-jms-resource --restype javax.jms.Queue --property name=MessageQueueDestination jms/queue/MeldungQueue

asadmin --user=admin stop-domain
rm /tmp/glassfishpwd
