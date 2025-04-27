# Використовуємо офіційний образ Java
FROM eclipse-temurin:17-jdk-jammy

# Робоча директорія
WORKDIR /app

# Копіюємо JAR-файл
COPY target/*.jar app.jar

# Вказуємо порт (Render використовує 10000)
EXPOSE 10000

# Команда запуску
ENTRYPOINT ["java", "-jar", "app.jar"]