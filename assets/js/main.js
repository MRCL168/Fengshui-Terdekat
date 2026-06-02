// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click', function(){
    var item = this.closest('.faq-item');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(el){ el.classList.remove('open'); });
    if(!isOpen) item.classList.add('open');
  });
});

// Intersection Observer - fade in
var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.style.opacity='1';
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.12});
document.querySelectorAll('.service-card,.why-card,.faq-item').forEach(function(el){
  el.style.opacity='0';
  el.style.transform='translateY(20px)';
  el.style.transition='opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Index page tabs
var tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(function(btn){
  btn.addEventListener('click', function(){
    tabs.forEach(function(t){ t.classList.remove('active'); });
    this.classList.add('active');
    var target = this.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(function(c){
      c.style.display = (c.id === target) ? 'block' : 'none';
    });
  });
});
