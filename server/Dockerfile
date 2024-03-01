# Use an official Maven image as a build stage
FROM maven:3.8.4 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project files into the container
COPY . .


# Use an official OpenJDK runtime as a base image
FROM openjdk:17-oracle

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the Maven build stage
COPY --from=build /app/target/server-0.0.1-SNAPSHOT.jar /app/

# Run the application when the container starts
CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]