# Build environment
FROM node:lts-alpine as build-stage

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# serve the app
RUN npm run build

# ----------------------------------------------------------------------------------------

# Production environment
FROM nginx:1.19.5-alpine as production-stage

# copy the built version of the app
COPY --from=build-stage /app/build /usr/share/nginx/html

# run the app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]