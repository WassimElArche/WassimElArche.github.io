const git = document.querySelector("#git")

git.addEventListener('click',(e)=>{
    e.preventDefault()
    window.open('https://github.com/wassimelarche','_blank')
})

const linkedin = document.querySelector("#linkedin")



/*git.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    e.target.style.color = "blue";
    console.log("souris entré")
})

git.addEventListener('mouseleave',(e)=>{
    e.preventDefault()
    e.target.style.color = "red";
    console.log("souris sorti")
})*/


const mail = document.querySelector("#mail")

mail.addEventListener('click',(e)=>{
    e.preventDefault()
    window.open('mailto: elarchewassim@gmail.com')
})

document.querySelectorAll('.gravityButton').forEach(btn => {
  
    btn.addEventListener('mousemove', (e) => {
      
      const rect = btn.getBoundingClientRect();    
      const h = rect.width / 2;
      
      const x = e.clientX - rect.left - h;
      const y = e.clientY - rect.top - h;
  
      const r1 = Math.sqrt(x*x+y*y);
      const r2 = (1 - (r1 / h)) * r1;
  
      const angle = Math.atan2(y, x);
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
      
      const op = (r2 / r1) + 0.25;
  
      btn.style.setProperty('--tx', `${tx}px`);
      btn.style.setProperty('--ty', `${ty}px`);
      btn.style.setProperty('--opacity', `${op}`);
    });
  
    btn.addEventListener('mouseleave', (e) => {
      btn.style.setProperty('--tx', '0px');
      btn.style.setProperty('--ty', '0px');
      btn.style.setProperty('--opacity', `${0.25}`);
    });
  })



window.addEventListener("load", (event) => {
    var chart = document.querySelector('.highcharts-credits')
    chart.remove()
  });
