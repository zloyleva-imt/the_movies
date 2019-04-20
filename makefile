
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

npm_com: #Connect container
	@docker-compose exec nodejs npm install $(com)

serv: #Connect container
	@docker-compose exec nodejs npm run start