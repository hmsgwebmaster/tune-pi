# rctm-pi
Real-time Captioning for Time-based Media project

This repo contains the app that runs on the Raspberry Pis
- playvideo.js connects to a WordPress server with the rctm plugin (https://github.com/hmsgwebmaster/rctm)
- playvideo-tune.js connects to the Laravel server "Tune" (https://github.com/ericpugh/tune)

For testing, the Raspberry Pis are set up with Raspbian OS and the following packages:
- nodejs
- npm
- omxctrl (https://www.npmjs.com/package/omxctrl)
