

#To deploy app by docker

 - First step: build image (include `Dockerfile`, `.dockerignore`, `nginx.conf` file), On window, run command with administrator role, command:  
     `docker build --pull --rm -f "Dockerfile" -t ngdocker:0.0.1 "."`
 - Second step: run container by command:  
      `docker build --pull --rm -f "Dockerfile" -t ngdocker:0.0.1 "."`
