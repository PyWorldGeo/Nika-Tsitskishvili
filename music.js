// Lyrics data (key = track file name, value = lyrics text)
const lyricsData = {
    "Ancient Memories.wav": `
    Ancient memory, which makes you smile
    When you are so tired with reality...
    There's someone who lives in you as time
    Took his soul and life, but you can still feel...

    Maybe it was just a dream, maybe it was a tale,
    Beautiful as flower I believe in still...
    I know you are not here, but this song will rise
    As far, as higher, you could hear...

    Ancient memory, which makes you smile
    When you are so tired with reality...
    There's someone who loved you, but the time
    Took his soul and life _ you can still feel...`,

    "Make It Easy.wav": `
    Make it easy to say these feelings will stay in you for ever,
    And I will live only for love...

    And if the god says that the heaven is the only place where angels are,
    I'll smile as I know it can't be true...

    Make it easy to see the world like no one else, but dreamer sees,
    And I will smile only for you...

    And if the god says that the heaven is the only place where angels are,
    I'll smile as I know you...

    Make it easy to say these feelings will stay in you for ever,
    And I will live only for you...
`,

    "Keep Trying.wav": `
    Keep trying while walking down the street
    Not to realize how it seems to be...

    Keep trying lying to yourself,
    Everything you loved, everything you had
    Has gone, has gone, has gone...

    Darkness please forgive me for loving stars!
    I tried, I tried all night not looking above the skies...

    Not looking above the skies...
    Not looking above the skies...
    Not looking above the skies...
    Oooooooooooooooooooooooooooooo

    Keep trying holding on your dream,
    Which no one knows as no one needs...

    Goodbye, Goodbye, Goodbye...`,

    "The Wind.wav": `
    დღეს ქარი ისევ დაჰქროდა... (4X)

    მე ვეღარ დაგიფარე შენგან შენ...
    მე ვეღარ დაგიფარე შენგან...
    მე ვეღარ დაგიფარე შენგან შენ...
    მე ვეღარ დაგიფარე შენგან...

    დღეს ქარი ისევ დაჰქროდა (4X)

    ხელს გავუშვებ ხელს, არაფერი ესმით სხვებს...
    შენ გაგიშვებ ხელს, არაფერი, არაფერს!
    ხელს გავუშვებ ხელს, არაფერი ესმით სხვებს...
    შენ გაგიშვებ ხელს, არაფერი, არაფერს!

    არაფერი, არა ფერს! (4X)

    მზეს ვეღარ დაგიხატავ, მზეს,
    მე ვეღარ დაგიხატავ მზის ფერს...
    შენ ვეღარ დაინახავ მზეს,
    შენ ვეღარ დაინახავ ჩემს მზის ფერს...

    მმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმმ

    შენ მოიპარავ ფიფქებს თეთრს,
    შენ მოიპარავ ფიქრებს თეთრს...
    შენ მოიპარავ ჩემს ფიფქებს თეთრს,
    შენ მოიპარავ ფიქრებს თეთრს...

    ისევ ისეე (4X)

    დღეს ქარი ისევ დაჰქროდა,
    ეს ქარი ისევ დაჰქროდა...
    დღეს ქარი ისევ დაჰქროდა,
    ეს ქარი ისევ დაჰქროდა...

    შშშშშშშშშშშშშშშშშშშშშშშშშშშ

`
};

// Clickable tracks
document.querySelectorAll(".card a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // prevent default navigation

        const track = this.getAttribute("href");
        const title = this.querySelector("p").textContent;

        const audio = document.getElementById("musicFrame");
        const nowPlaying = document.getElementById("nowPlaying");
        const player = document.getElementById("audioPlayer");
        const lyricsDiv = document.getElementById("lyrics");

        audio.src = track;     // set new track
        audio.play();          // play it
        nowPlaying.textContent = title;

        // Display lyrics if available
        const fileName = track.split("/").pop();
        lyricsDiv.textContent = lyricsData[fileName] || "Lyrics not available";

        player.classList.remove("hidden"); // show player
    });
});

// Close player
document.getElementById("closePlayer").addEventListener("click", () => {
    const audio = document.getElementById("musicFrame");
    audio.pause();
    audio.currentTime = 0;     // reset to start
    document.getElementById("audioPlayer").classList.add("hidden");

    // Clear lyrics
    document.getElementById("lyrics").textContent = "";
});