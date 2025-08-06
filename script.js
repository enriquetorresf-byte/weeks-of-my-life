
const circles = document.querySelectorAll('.circle');
const saveData = () => {
    const marked = [];
    document.querySelectorAll('.circle.marked').forEach(div => marked.push(div.id));
    localStorage.setItem('lifeCalendarPoster', JSON.stringify(marked));
};
const loadData = () => {
    const marked = JSON.parse(localStorage.getItem('lifeCalendarPoster') || '[]');
    marked.forEach(id => {
        const cell = document.getElementById(id);
        if (cell) cell.classList.add('marked');
    });
};
circles.forEach(circle => {
    circle.addEventListener('click', () => {
        circle.classList.toggle('marked');
        saveData();
    });
});
loadData();
document.getElementById('reset').addEventListener('click', () => {
    circles.forEach(circle => circle.classList.remove('marked'));
    saveData();
});
