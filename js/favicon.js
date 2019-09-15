onload = function() {
    cv = document.querySelector('#cvl'),
    ctx = cv.getContext('2d');
    C3qπ = 1.5 * Math.PI,
    tc = pct = 0,
    lnk = document.querySelector('link[rel*="icon"]');
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);
    tc = setInterval(updateLoader, 60);
};

function updateLoader() {
    with(ctx) {
        clearRect(0, 0, 16, 16);
        beginPath();
        arc(8, 8, 6, C3qπ, (pct * 2 * Math.PI / 100 + C3qπ));
        stroke();
    }
    lnk.href= cv.toDataURL('image/png');
    if (pct === 100) {
        clearInterval(tc);
        return;
    }
    pct++;
}