# Tune Pi
Real-time Captioning for Time-based Media

Raspberry Pi nodejs apps that connect to the Tune server (https://github.com/ericpugh/tune) to sync videos playing on devices with transcripts viewed through a web browser.

- tune-pi.js connects to the Tune server, and uses OMXplayer on the Pi as the videoplayer
- tune-bs.js connects to the Tune server, and uses BrightSigns as the videoplayer

## Requirements

Set up Raspberry Pis with Raspbian OS and install the following:
- node
- omxctrl (for tune-pi.js)
- onoff (for tune-bs.js)

We tested using a Raspberry Pi 3B+ and BrightSign XD 1030.

## Using the Raspberry Pi as the video player
A single Raspberry Pi can be used as both the video player and to connect to the Tune server.

- After setting up the Raspberry Pi, copy the default-config.json file and rename as config.json
- Edit the config.json file with the location of your video file on the Raspberry Pi, and the tune server details

## Using a Raspberry Pi attached to a BrightSign player
A Raspberry Pi can be used with a BrightSign player to watch for signals sent through GPIO, and to connect to the Tune Server. To connect the Raspberry Pi to the BrightSign we used a DB15 connector with a breakout board (https://www.amazon.com/gp/product/B01N0R3QXV/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1) and some male to female dupont jumper wires (https://www.amazon.com/gp/product/B00PBZMN7C/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1). GPIO wiring diagrams can be found at the respective device documentation pages. https://www.raspberrypi.org/documentation/usage/gpio/ and https://brightsign.zendesk.com/hc/en-us/articles/218065937-GPIO-Which-pins-correspond-to-which-buttons-. On the Raspberry Pi, we used GPIO 4 (pin 7) and one of the ground pins. On the BrightSigns, we used GPIO pin 2 (ground) and GPIO pin 7 (GPIO 1).

### Setting up the Raspberry Pi
- After setting up the Raspberry Pi, copy the default-config.json file and rename as config.json
- Edit the config.json file with the tune server details (the "player" config can be ignored)

### Setting up the BrightSign player
- Using BrightAuthor create an interactive playlist
- Under the File menu, select Presentation Properties
- Under the I/0 tab, set a GPIO as output
- Add the media file
- Add a media end event to the media file
- Select Return to prior state in the Main tab
- Select the Advanced tab and add a GPIO on and GPIO off command to the pin that was selected as output
- Publish to a SD card
- Load and test
