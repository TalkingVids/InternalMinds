function choosePath() {
    document.getElementById('story').innerHTML = `
        <div class="video-container" style = "left: 11%;">
            <iframe src="videos/Intro.mp4" frameborder="0" allowfullscreen></iframe>
        </div>
        <a href="index.html"><button>Back</button></a>
        <button onclick="explore()">Explore</button>
        <div class="meditation-quote">"Peace comes from within. Do not seek it without." - Buddha</div>
        <div class="relaxation-exercise">Take a deep breath in for 4 counts, hold for 7 counts, and exhale for 8 counts. Repeat this cycle for a few minutes.</div>
    `;
    animateElements();
}

function followGlow() {
    document.getElementById('story').innerHTML = `
        <div class="video-container">
            <iframe src="videos/Guided.mp4" frameborder="0" allowfullscreen></iframe>
        </div>
        <button onclick="findPath()">Back</button>
        <button onclick="end()">End</button>
        <div class="meditation-quote">"Inhale the future, exhale the past." - Unknown</div>
    `;
    animateElements();
}

function explore() {
    document.getElementById('story').innerHTML = `
        <div class="video-container">
            <iframe src="videos/About.mp4" frameborder="0" allowfullscreen></iframe>
        </div>
        <p>You decide to explore your surroundings.</p>
        <button onclick="choosePath()">Back</button>
        <button onclick="findPath()">Continue Exploring</button>
        <div class="meditation-quote">"Quiet the mind, and the soul will speak." - Ma Jaya Sati Bhagavati</div>
    `;
    animateElements();
}

function exploreGarden() {
    document.getElementById('story').innerHTML = `
        <div class="video-container">
            <iframe src="videos/Extended.mp4" frameborder="0" allowfullscreen></iframe>
        </div>
        <button onclick="findPath()">Back</button>
        <button onclick="end()">End</button>
        <div class="meditation-quote">"Nature does not hurry, yet everything is accomplished." - Lao Tzu</div>
    `;
    animateElements();
}

function findPath() {
    document.getElementById('story').innerHTML = `
        <img src="images/RedBar.jpg" alt="RedBar" class="story-image">
        <button onclick="followGlow()">Follow Glow</button>
        <button onclick="exploreGarden()">Explore Garden</button>
        <button onclick="explore()">Back</button>
        <div class="meditation-quote">"The only way out is in." - Ram Dass</div>
    `;
    animateElements();
}

function end() {
    document.getElementById('story').innerHTML = `
        <img src="images/header02.jpg" alt="Header" class="story-image">
        <p>The end.</p>
        <button onclick="restart()">Start Over</button>
        <div class="meditation-quote">"The journey of a thousand miles begins with a single step." - Lao Tzu</div>
    `;
    animateElements();
}

function restart() {
    document.getElementById('story').innerHTML = `
        <img src="images/header02.jpg" alt="Header" class="story-image">
        <p>You wake up in a black and white world. Everything seems dull and lifeless.</p>
        <button onclick="choosePath()">Explore</button>
    `;
}

function animateElements() {
    // Add CSS animations to elements
    const elements = document.querySelectorAll('.meditation-quote, .relaxation-exercise, .video-container');
    elements.forEach(element => {
        element.classList.add('fadeIn');
    });
}
