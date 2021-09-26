# Password Manager Frontend

### Build container
`sudo -S docker build -t password-manager-frontend_image .`

### Run container from image
`sudo docker run --net host -i --name password-manager-frontend password-manager-frontend_image`
If you want to run it in detached mode, add `-d` flag.
<br>
If container already exists, run it with `sudo docker start -a -i password-manager-frontend`
<br>
If you don't want to start it in attached mode, remove `-a` flag.
