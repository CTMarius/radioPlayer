# Radio Player

A web-based radio player with a clean interface, real-time song information, and playback history.

## Features

- Real-time song information display
- Playback controls (play, pause, volume)
- Song history tracking
- Current listener count
- Animated background
- About section with artist information
- Responsive design

## Technologies Used

- HTML5 Audio API
- CSS3 Animations
- Vanilla JavaScript
- Icecast Server Integration (v2.4.4)
- Ezstream (v0.6.0)

## Setup

1. Clone the repository
2. Update the streaming URL in `index.html`:
   ```html
   <audio id="audio" src="https://your-icecast-server.com/stream" ...>
   ```
3. Update the streaming data URL in `script.js`:
   ```js
   xhttp.open('GET', 'https://your-icecast-server.com/status-json.xsl', true);
   ```

## Usage

Open `index.html` in a web browser. The player features:

- Play/Pause button
- Volume controls
- Song history viewer
- About section with artist information

## Dependencies

- Icecast 2.4.4
- Ezstream 0.6.0
- ngrok (for tunneling)

## Credits

- Animation: [Chris Smith](https://codepen.io/chris22smith/pen/RZogMa)
- Favicon & QA: Vali

## License

This project uses multiple licenses:

- Music content: [Creative Commons](https://creativecommons.org/licenses/)
- Design elements: MIT License (see About section for details)
