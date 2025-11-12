/*===== DARK MODE TOGGLE =====*/
const themeToggle = document.getElementById('themeToggle');
const updateThemeIcon = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    if(themeToggle) {
        if(currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
        }
    }
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
};

if(themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== FORM VALIDATION AND SUBMISSION =====*/
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    // Initialize EmailJS (Substitua pelos seus valores)
    // emailjs.init('YOUR_PUBLIC_KEY');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        // Basic validation
        if(!name || !email || !message) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            alert('Por favor, insira um email válido');
            return;
        }
        
        // Enviar via EmailJS (descomente após configurar)
        try {
            // Descomente a linha abaixo após obter suas credenciais do EmailJS
            // const response = await emailjs.send('service_XXXXX', 'template_XXXXX', {
            //     from_name: name,
            //     from_email: email,
            //     message: message,
            //     to_email: 'seu-email@exemplo.com'
            // });
            
            // Se usando EmailJS, a resposta acima confirmará o envio
            // Se comentado, apenas mostra mensagem local
            alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
            contactForm.reset();
        } catch(error) {
            console.error('Erro ao enviar:', error);
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__card, .certification__card, .contact__input',{interval: 200}); 
