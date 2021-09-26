FROM node:latest

WORKDIR /mnt/HDD/Applications/JetBrains/Projects/WebStormProjects/password-manager-frontend
COPY . .

# packages
RUN npm install

EXPOSE 3000

CMD npm run start
