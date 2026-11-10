// 深色模式切换
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  })
}
// 打开页面自动读取上次的深色/浅色设置，所有页面同步
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// 食材勾选（只在recipes页面生效，其他页面没有这个列表也不会报错）
const ingredientItems = document.querySelectorAll('.ingredient-list li');
ingredientItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
  });
})

// Contact弹窗（只在contact页面生效）
const msgBtn = document.getElementById('msgBtn');
if(msgBtn){
  msgBtn.addEventListener('click', ()=>{
    alert("Thanks for your message!");
  })
}
