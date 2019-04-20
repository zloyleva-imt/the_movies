
start: #Starts container
	@docker-compose up -d

stop: #Stop container
	@docker-compose stop

restart: stop start
	@echo Restarting...

show: #Show container
	@docker ps

connect_nodejs: #Connect container
	@docker-compose exec nodejs /bin/sh

npm_com: #Install dep
	@docker-compose exec nodejs npm install $(com)

npm_i: #Npm init/install
	@docker-compose exec nodejs npm install

serv: #Run dev server
	@docker-compose exec nodejs npm run start