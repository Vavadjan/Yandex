document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    //const layer1 = document.querySelector('.layer1');
    const layer2 = document.querySelector('.layer2');
    const layer3 = document.querySelector('.layer3');

    body.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

        //layer1.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        layer2.style.transform = `translate(${xAxis * 2}px, ${yAxis * 2}px)`;
        layer3.style.transform = `translate(${xAxis * 3}px, ${yAxis * 3}px)`;
    });
});