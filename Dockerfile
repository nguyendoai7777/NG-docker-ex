FROM node:16-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
####RUN npx ngcc es2015 --create-ivy-entry-points

COPY . .

# Build the project and copy the files
RUN npm run ng build -- --prod

# Stage 2
FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/ng-docker/*

# Copy from the stage 1
COPY --from=builder /app/dist/ng-docker /var/www/ng-docker

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]