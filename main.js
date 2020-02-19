const blocks = [
    'grass-block',
    'stone', 'mossy-cobblestone',
    'redstone-ore', 'redstone-block',
    'diamond-ore', 'diamond-block',
    'emerald-ore', 'emerald-block',
    'gold-ore', 'gold-block',
    'coal-ore', 'coal-block',
    'iron-ore', 'iron-block'
];
function randomMove(block) {
    const x = Math.floor(Math.random() * 9 - 5);
    const y = Math.floor(Math.random() * 9 - 5);
    const z = Math.floor(Math.random() * 9 - 5);
    block.style.transform = `translate3d(${x * 256}px, ${y * 256}px, ${z * 256}px)`;
}
function block() {

    const block = document.createElement('div');
    block.setAttribute('class', `block ${blocks[Math.floor(Math.random() * blocks.length)]}`);
    const top = document.createElement('div');
    top.setAttribute('class', 'top');
    block.appendChild(top);
    const right = document.createElement('div');
    right.setAttribute('class', 'right');
    block.appendChild(right);
    const front = document.createElement('div');
    front.setAttribute('class', 'front');
    block.appendChild(front);
    const back = document.createElement('div');
    back.setAttribute('class', 'back');
    block.appendChild(back);
    const left = document.createElement('div');
    left.setAttribute('class', 'left');
    block.appendChild(left);
    const bottom = document.createElement('div');
    bottom.setAttribute('class', 'bottom');
    block.appendChild(bottom);
    randomMove(block);
    return block;
}
window.onload = () => {
    const map = document.body.querySelector('.map');
    const queue = [];
    for (let i = 0; i < 70; i++) {
        const child = block();
        queue.push(child);
        map.appendChild(child);
    }
    let i = 0;
    setInterval(() => {
        randomMove(queue[i]);
        i = (i + 1) % queue.length;
    }, 200);
}
