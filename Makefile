all: help
.PHONY: help
current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
help: Makefile
	@sed -n 's/^##//p' $<

##
## ——— 🚧 Templates ————————————————————————————————————————————————————————————
##
## component	Create a component, as well as its styles and tests
component:
	@scripts/create-component.sh
