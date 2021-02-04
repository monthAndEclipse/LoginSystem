FROM node:15.5.0-alpine3.11
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
#don't use regex like ./*/* ,it will copy all your files of the current folder
#into the container folder but without keeping the subfolder structure
COPY ./ ./
EXPOSE 4000 
CMD [ "node" ,"index.mjs" ] 

#how to run commands in a stopped docker container?
#https://thorsten-hans.com/how-to-run-commands-in-stopped-docker-containers
#docker commit 0dfd54557799 debug/ubuntu
#docker images 
#docker run -it --rm --entrypoint sh debug/ubuntu