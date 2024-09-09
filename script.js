const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif'); 

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'aww >_< thanks, but i just test my code hehe'
    gif.src = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAwbzN4MHE2OG05djJseW1jbXJndm1ibDltY3k1a2lwcTVwYW0xdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3QBVkqUJRmDXNIpPE/giphy.gif';
}); 

noBtn.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper'); 
    const wrapperRect = wrapper.getBoundingClientRect(); 
    const noBtnRect = noBtn.getBoundingClientRect(); 
    
    const maxX = wrapperRect.width - noBtnRect.width; 
    const maxY = wrapperRect.height - noBtnRect.height; 

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY); 

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY +  'px';
});
