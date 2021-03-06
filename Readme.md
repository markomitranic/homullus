# Homullus Homepage

Just a simple HTML based CV. Way easier to manage/update than the old Photoshop one.

## Production Deployment

`./deploy_prod.sh` thats it.

> This step assumes that you have already provided SSL certificates at `./nginx/ssl/cert.cer` and `./nginx/ssl/cert.key`.

## CI, no ci at the moment, sorry

## Local development

Start the application as seen in `./deploy_dev.sh`.

> This step assumes that you have already provided SSL certificates at `./nginx/ssl/cert.cer` and `./nginx/ssl/cert.key`.

Application hosted by nginx container should be available at the port you have chosen (default `443`).

### Node build & watch

You can now run commands against the waiting node container:
```
docker exec -ti homullus_node yarn install
docker exec -ti homullus_node yarn watch
```

### VSCode IntelliSense
In addition to this, you can use `vscode-remote-container` plugin to attach onto the existing `homullus_node` container, in order to have editor IntelliSense and access to dependencies.