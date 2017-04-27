FROM base-image:latest

#install curl tar and bash
#RUN yum install curl tar bash

#install maven
ARG MAVEN_VERSION=3.5.0
ARG USER_HOME_DIR="/root"
ARG SHA=beb91419245395bd69a4a6edad5ca3ec1a8b64e41457672dc687c173a495f034
ARG BASE_URL=https://apache.osuosl.org/maven/maven-3/${MAVEN_VERSION}/binaries

RUN mkdir -p /usr/share/maven /usr/share/maven/ref
RUN curl -fsSL -o /tmp/apache-maven.tar.gz https://apache.osuosl.org/maven/maven-3/3.5.0/binaries/apache-maven-3.5.0-bin.tar.gz
RUN echo "beb91419245395bd69a4a6edad5ca3ec1a8b64e41457672dc687c173a495f034  /tmp/apache-maven.tar.gz" | sha256sum -c -
RUN tar -xzf /tmp/apache-maven.tar.gz -C /usr/share/maven --strip-components=1
RUN rm -f /tmp/apache-maven.tar.gz
RUN ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

#Linux: export MAVEN_HOME=/usr/share/maven
ENV MAVEN_HOME /usr/share/maven
#Linux: export MAVEN_CONFIG=/root/.m2
ENV MAVEN_CONFIG "$USER_HOME_DIR/.m2"

#COPY maven-script.sh /usr/local/bin/mvn-entrypoint.sh
#COPY settings-docker.xml /usr/share/maven/ref/settings-docker.xml

#copy sample application war
COPY shared/dockerjeeglassfishsample.war glassfish4/glassfish/domains/domain1/autodeploy/dockerjeeglassfishsample.war

#Workaround to copy jars manually without maven
#COPY libs glassfish4/glassfish/domains/domain1/lib/ext/
COPY pom.xml tmp/my-mvn/pom.xml

WORKDIR /tmp/my-mvn
RUN mvn -DoutputDirectory=/glassfish4/glassfish/domains/domain1/lib dependency:copy-dependencies

#execute maven script on image start with default command "mvn"
#ENTRYPOINT ["/usr/local/bin/mvn-entrypoint.sh"]
#CMD ["mvn"]

# Swagger Ports being exposed
EXPOSE 8002

# Start asadmin console and the domain
CMD ["asadmin", "start-domain", "-v"]

