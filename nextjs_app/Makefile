APP_NAME=events_app
VERSION=3

build: 
	docker build -t $(APP_NAME):$(VERSION) .  

run: build
	docker run --rm -p 3000:3000 $(APP_NAME):$(VERSION)

debug: 
	docker run --rm -ti -p 3000:3000 $(APP_NAME):$(VERSION) sh

test:
	docker run --rm -p 3000:3000 $(APP_NAME):$(VERSION) npm test

