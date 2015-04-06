/**
 * Created by jaelomin on 15. 3. 4..
 */
document.createSVG = function createSVG(tag) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
}

Element.prototype.setAttrs = function setSVGAttr(attrs) {
    Object.keys(attrs).forEach(function (key) {
        this.setAttribute(key, attrs[key]);
    }.bind(this));
}

function setCoords(cx, cy, r, count, total) {
    var Θ = Math.PI * 2 * count / total;
    return {
        x: cx + Math.sin(Θ) * r,
        y: cy - Math.cos(Θ) * r
    };
}

function setClock() {
    var date = new Date(),
        hours = setCoords(250, 250, 125, date.getHours(), 12),
        minutes = setCoords(250, 250, 150, date.getMinutes(), 60),
        seconds = setCoords(250, 250, 175, date.getSeconds(), 60);

    document.getElementById('hours').setAttrs({ x2: hours.x, y2: hours.y });
    document.getElementById('minutes').setAttrs({ x2: minutes.x, y2: minutes.y });
    document.getElementById('seconds').setAttrs({ x2: seconds.x, y2: seconds.y });

    window.requestAnimationFrame(setClock);
}

var svg = document.createSVG('svg');
svg.setAttrs({
    width: 500,
    height: 500,
});

// 판때기
var plate = document.createSVG('circle');
plate.setAttrs({
    cx: 250,
    cy: 250,
    r: 225,
    fill: 'lavender'
});
svg.appendChild(plate);

// 눈금
for(var i=0; i<12; ++i) {
    var dot = document.createSVG('circle');
    var c = setCoords(250, 250, 200, i, 12);
    dot.setAttrs({
        cx: c.x,
        cy: c.y,
        r: i%3? 8 : 10,
        fill: i? 'grey' : 'red',
    });
    svg.appendChild(dot);
}

// 바늘
var hBar = document.createSVG('line');
hBar.setAttrs({
    id: 'hours',
    x1: 250,
    y1: 250,
    x2: 250,
    y2: 125,
    stroke: 'darkgrey',
    'stroke-width': 16,
    'stroke-linecap': 'round'
});
svg.appendChild(hBar);

var mBar = document.createSVG('line');
mBar.setAttrs({
    id: 'minutes',
    x1: 250,
    y1: 250,
    x2: 400,
    y2: 250,
    stroke: 'darkblue',
    'stroke-width': 12,
    'stroke-linecap': 'round'
});
svg.appendChild(mBar);

var sBar = document.createSVG('line');
sBar.setAttrs({
    id: 'seconds',
    x1: 250,
    y1: 250,
    x2: 250,
    y2: 425,
    stroke: 'black',
    'stroke-width': 4,
    'stroke-linecap': 'round'
});
svg.appendChild(sBar);

document.body.appendChild(svg);
setClock();