import './style.css';
import instagram from './assets/img/instagram_6422200.png';
import github from './assets/img/github-sign.png';
import youtube from './assets/img/youtube_6422215.png';

import { footer } from './components/footer';

document.querySelector('#app').innerHTML = `<div id="root">
<div class="wrapper">
  <div class="profile">
    <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
    <h3 class="name">Helmi Ainun</h3>
    <h6 class="title">Junior Front End Developer</h6>
  </div>
  <div class="social">
    <a href="https://instagram.com/helmiainun" target="_blank">
      <img src=${instagram} alt="instagram" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCV6lZ1qluM95bZCnxl6_lmg"
      target="_blank"
    >
      <img src=${youtube} alt="youtube" />
    </a>
    <a href="https://github.com/helmiainun" target="_blank">
      <img src=${github} alt="github" />
    </a>
  </div>
  <div class="links">
    <a
      class="link"
      href="http://helmi-ainun-portfolio.vercel.app/"
      target="_blank"
    >
      My Portfolio
    </a>
    <a class="link" href="https://www.linkedin.com/in/helmiainunnaim/"
    target="_blank"
    >
        LinkedIn Profile
    </a>
    <a class="link" href="#"> Aja aja ada </a>
    <a class="link" href="#"> Belum ketawa udah apa apa </a>
  </div>
  ${footer()}
</div>
</div>`;
