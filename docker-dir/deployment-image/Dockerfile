FROM base-image:latest

COPY /shared/dockerjeeglassfishsample.war /glassfish4/glassfish/domains/domain1/autodeploy/dockerjeeglassfishsample.war

# Start asadmin console and the domain
CMD ["asadmin", "start-domain", "-v"]
#CMD ["asadmin", "start-domain", "-v", "-d"]