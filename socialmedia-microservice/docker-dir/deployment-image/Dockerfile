FROM socialmedia-base-image

#Bugfix: org.eclipse.persistence.moxy.jar META-INF Modified to fix @Produces(MediaType.APPLICATION_JSON) error.
#Source: https://stackoverflow.com/questions/33722764/glassfish-error-when-producing-json
#Maybe use org.glassfish.jersey.media jersey-media-moxy instead of modifying the eclipse jar.
#RUN rm /glassfish4/glassfish/modules/org.eclipse.persistence.moxy.jar
#COPY /libs/org.eclipse.persistence.moxy-modified.jar  /glassfish4/glassfish/modules/org.eclipse.persistence.moxy.jar

#AUTODEPLOY_DIR environment variable is defined in the payara/server-full docker image
COPY /shared/socialmedia-microservice-1.0.war /opt/payara41/deployments/socialmedia-microservice-1.0.war

#Alternative deployment location (not recommended):
#COPY /shared/socialmedia-microservice-1.0.war /opt/payara41/glassfish/domains/domain1/autodeploy/socialmedia-microservice-1.0.war


# Expose debug port
EXPOSE 9009

