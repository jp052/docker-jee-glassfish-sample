FROM postgres

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB docker

ADD shared/create001.sql /docker-entrypoint-initdb.d/
