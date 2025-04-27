# Крок 1: Збираємо JAR-файл
FROM eclipse-temurin:17-jdk-jammy as builder
WORKDIR /workspace/app

# Копіюємо всі файли, включаючи mvnw
COPY . .

# Надаємо права на виконання для mvnw
RUN chmod +x mvnw

# Збираємо JAR-файл
RUN ./mvnw clean package -DskipTests

# Крок 2: Створюємо остаточний образ
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /workspace/app/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 10000
ENTRYPOINT ["java", "-jar", "app.jar"]