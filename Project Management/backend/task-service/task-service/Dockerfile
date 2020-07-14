FROM openjdk:8-jdk-alpine
EXPOSE 8083
ADD target/task-service.jar task-service.jar
ENTRYPOINT ["sh", "-c", "java -jar /task-service.jar"]

#ADD target/hello-world-docker.jar hello-world-docker.jar
#ENTRYPOINT ["sh", "-c", "java -jar /hello-world-docker.jar"]