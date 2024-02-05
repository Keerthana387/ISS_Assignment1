const toggleSwitch = document.querySelector('.toggle-input');
const element1 = document.querySelector('.topnav');
const element2 = document.getElementById('home');
const element3 = document.getElementById('about_me');
const element4 = document.getElementById('achievements');
const element5 = document.querySelector('.main');
const element6 = document.querySelector('.profile_pic');
const element7 = document.querySelector('.butt');
const element8 = document.querySelector('._list');
const element9 = document.getElementById('mail_a');
const element10 = document.getElementById('blog');
const element11 = document.getElementById('mail_a2');
const element12 = document.getElementById('mail_a3');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    element1.classList.add('topnav1');
    element2.classList.add('darkmode');
    element3.classList.add('darkmode');
    element4.classList.add('darkmode');
    element5.classList.add('darkmode1');
    element6.classList.add('profile_pic1');
    element7.classList.add('butt1');
    element8.classList.add('darkmode');
    element9.classList.add('darkmode');
    element10.classList.add('darkmode');
    element11.classList.add('darkmode');
    element12.classList.add('darkmode');
  } else {
    element1.classList.remove('topnav1');
    element2.classList.remove('darkmode');
    element3.classList.remove('darkmode');
    element4.classList.remove('darkmode');
    element5.classList.remove('darkmode1');
    element6.classList.remove('profile_pic1');
    element7.classList.remove('butt1');
    element8.classList.remove('darkmode');
    element9.classList.remove('darkmode');
    element10.classList.remove('darkmode');
    element11.classList.remove('darkmode');
    element12.classList.remove('darkmode');
  }
});
