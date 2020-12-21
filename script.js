// DOM control

window.onload = function () {
    var page = new Page;
    //page.changeTitlePage();
   
    getStreamingData();
    // Interval to get streaming data in miliseconds
    setInterval(function () {
        getStreamingData();
    }, 4000);

}

function Page() {
    this.changeTitlePage = function (title = RADIO_NAME) {
        document.title = title;
    };

    this.refreshCurrentSong = function (song, artist) {
        var currentSong = document.getElementById('currentSong');
        var currentArtist = document.getElementById('currentArtist');

        if (song !== currentSong.innerHTML) {
            // Animate transition
            currentSong.className = 'animated flipInY text-uppercase';
            currentSong.innerHTML = song;

            currentArtist.className = 'animated flipInY text-capitalize';
            currentArtist.innerHTML = artist;

            // Refresh modal title
            document.getElementById('lyricsSong').innerHTML = song + ' - ' + artist;

            // Remove animation classes
            setTimeout(function () {
                currentSong.className = 'text-uppercase';
                currentArtist.className = 'text-capitalize';
            }, 2000);
        }
    }
}   
function getStreamingData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            if(this.response.length === 0) {
                console.log('%cdebug', 'font-size: 22px')
            }

            var data = JSON.parse(this.responseText);

            var page = new Page();

            var currentSongElement = document.getElementById('currentSong').innerHTML.replace(/&apos;/g, '\'');
            let currentSongEl = currentSongElement.replace(/&amp;/g, '&');

            // Formating characters to UTF-8
            let song = data.currentSong.replace(/&apos;/g, '\'');
            let currentSong = song.replace(/&amp;/g, '&');

            let artist = data.currentArtist.replace(/&apos;/g, '\'');
            let currentArtist = artist.replace(/&amp;/g, '&');
            currentArtist = currentArtist.replace('  ', ' '); 
            
            // Change the title
            document.title = currentSong + ' - ' + currentArtist + ' | ' + RADIO_NAME;

            if (currentSongEl.trim() !== currentSong.trim()) {
                page.refreshCover(currentSong, currentArtist);
                page.refreshCurrentSong(currentSong, currentArtist);
                page.refreshLyric(currentSong, currentArtist);

                for (var i = 0; i < 2; i++) {
                    page.refreshHistoric(data.songHistory[i], i);
                }
            }
        } 
    };

    var d = new Date();

    // Requisition with timestamp to prevent cache on mobile devices
    xhttp.open('GET', 'process.php?t=' + d.getTime(), true);
    xhttp.send();
}