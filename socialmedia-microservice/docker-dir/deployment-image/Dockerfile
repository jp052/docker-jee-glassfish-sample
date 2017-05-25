FROM base-image-3:latest

#Bugfix: org.eclipse.persistence.moxy.jar META-INF Modified to fix @Produces(MediaType.APPLICATION_JSON) error.
#Source: https://stackoverflow.com/questions/33722764/glassfish-error-when-producing-json
RUN rm /glassfish4/glassfish/modules/org.eclipse.persistence.moxy.jar
COPY /libs/org.eclipse.persistence.moxy-modified.jar  /glassfish4/glassfish/modules/org.eclipse.persistence.moxy.jar

COPY /shared/socialmedia-microservice-1.0.war /glassfish4/glassfish/domains/domain1/autodeploy/socialmedia-microservice-1.0.war
