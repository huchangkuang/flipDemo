const btn = document.querySelector('button')
const box = document.querySelector('.box')
const list = document.querySelectorAll('.box .item')
list.forEach((el) => {
    el.setAttribute('data-start', getLocation(el))
});
function getLocation(el) {
    const rect = el.getBoundingClientRect()
    return rect.top
}

btn.onclick = () => {
    const [f, s, t, four, five] = list
    box.insertBefore(f, null)
    box.insertBefore(s, five)
    list.forEach((el) => {
        const end = getLocation(el)
        const start = el.getAttribute('data-start')
        el.removeAttribute('data-start')
        const dis = -(end - Number(start))
        console.log(dis);
        el.style.transform = `translateY(${dis}px)`
    });
    requestAnimationFrame(() => {
        new Array(list.length).fill('').forEach((i, index) => {
            const el = list[index]
            el.style.transition = 'all 0.3s linear'
            el.style.removeProperty('transform')
        });
    })
}