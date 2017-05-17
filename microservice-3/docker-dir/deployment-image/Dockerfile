FROM base-image:latest

COPY /shared/microservice-3-1.0.war /glassfish4/glassfish/domains/domain1/autodeploy/microservice-3-1.0.war

# Start asadmin console and the domain
#CMD ["asadmin", "start-domain", "-v"]
CMD ["asadmin", "start-domain", "-v", "-d"]