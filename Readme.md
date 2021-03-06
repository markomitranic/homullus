# Homullus Homepage

Just a simple HTML based CV. Way easier to manage/update than the old Photoshop one.

Start the application as seen in `./deploy_dev.sh`.

## Production Deployment

Start a production build: `docker exec -ti homullus_node /app/scripts/build-release.sh`.

The script will build the dist, and place it in the `/docs/` directory which is used for GitHub Pages.

## Local development

You would usually just start a webpack server if needed:
```
docker exec -ti homullus_node yarn install
docker exec -ti homullus_node yarn run watch
```

### VSCode IntelliSense
In addition to this, you can use `vscode-remote-container` plugin to attach onto the existing `homullus_node` container, in order to have editor IntelliSense and access to dependencies.