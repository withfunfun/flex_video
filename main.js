const items = document.querySelectorAll('article');
const aside = document.querySelector('aside');
const btnClose = document.querySelector('.btnClose');


items.forEach(item => {
	item.addEventListener('mouseenter', e => {
		e.currentTarget.querySelector('video').play();
	})

	item.addEventListener('mouseleave', e => {
		e.currentTarget.querySelector('video').pause();
	})

    item.addEventListener('click', e => {
        const tit = e.currentTarget.querySelector('h2').innerText;
		const con = e.currentTarget.querySelector('p').innerText;
        const vidSrc = e.currentTarget.querySelector('video').getAttribute('src');

        aside.querySelector('h2').innerText = tit;
        aside.querySelector('p').innerText = con;
        aside.querySelector('video').setAttribute('src', vidSrc);
        aside.classList.add('on')        
    })

	btnClose.addEventListener('click', ()=>{
		aside.classList.remove('on');
	}) 
    
})