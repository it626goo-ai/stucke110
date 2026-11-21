// スクロールでふわっと出す(動きを減らす設定ではCSS側で無効)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// 製品メニュー(クリック・タップで開閉。外側を押す・Escで閉じる)
document.querySelectorAll('.has-menu').forEach(m=>{
  const b=m.querySelector('.menu-btn');
  const set=o=>{m.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
  b.addEventListener('click',e=>{e.stopPropagation();set(!m.classList.contains('open'))});
  document.addEventListener('click',e=>{if(!m.contains(e.target))set(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){set(false);b.focus()}});
});
