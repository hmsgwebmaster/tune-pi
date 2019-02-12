# rctm-pi
Real-time Captioning for Time-based Media project

This repo contains the app that runs on the Raspberry Pis
- playvideo-tune.js connects to the Tune server, and uses OMXplayer on the Pi as the videoplayer (https://github.com/ericpugh/tune)
- playvideo-tune-bs.js connects to the Tune server, and uses BrightSigns as the videoplayer

For testing, the Raspberry Pis are set up with Raspbian OS and the following packages:
- nodejs
- npm
- omxctrl (https://www.npmjs.com/package/omxctrl)
