#### Requirements ####
Node v16

#### Install ####
`yarn`

#### Before commit ####
`yarn lint-fix`

#### Development ####
`yarn dev`

#### Production ####
`yarn generate`
`yarn serve`

#### NOTES ####

##### NGINX CONFIG ####
`./nginx.conf.example`
##### SET PORT FOR SERVE ####
change in `nuxt.config.js` key `port` in `server`

##### 502 NGINX ####
`setsebool -P httpd_can_network_connect 1`