# Usa la imagen oficial de Node.js como base
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto (package.json, package-lock.json y otros archivos necesarios)
COPY package*.json ./

# Instala las dependencias de tu aplicación
RUN npm install

# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Construye la aplicación Angular para producción
RUN ng build  --watch --configuration development

# Expone el puerto 8080 para servir la aplicación
EXPOSE 8080

# Ejecuta el servidor de producción, usando http-server para servir los archivos de dist
CMD ["npx", "http-server", "dist/portafolio/browser", "-p", "8080"]
