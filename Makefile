.DEFAULT_GOAL := help

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: dist
dist: ## Build the website for production
	rm -rf dist
	yarn --loglevel=warn install
	yarn --loglevel=warn run build

.PHONY: d-dist
d-dist: ## Build the website for production with docker container
	rm -rf dist
	docker run -it -u $(id -u ${USER}):$(id -g ${USER}) -v $(PWD):/app -w /app node:14 yarn --loglevel=warn install && yarn --loglevel=warn run build

