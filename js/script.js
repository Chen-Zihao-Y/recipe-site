// 深色模式切换
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  })
}
// 记住上次的深色模式
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// 食材点击勾选
const ingredientItems = document.querySelectorAll('.ingredient-list li');
ingredientItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
  });
})

// 联系页弹窗
const msgBtn = document.getElementById('msgBtn');
if(msgBtn){
  msgBtn.addEventListener('click', ()=>{
    alert("Thanks for your message!");
  })
}
