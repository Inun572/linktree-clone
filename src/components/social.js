import instagram from '../assets/img/instagram_6422200.png';
import github from '../assets/img/github-sign.png';
import youtube from '../assets/img/youtube_6422215.png';

export const social = () => {
  return `<div class="flex justify-center items-center gap-8">
    <a href="https://instagram.com/helmiainun" target="_blank" class="social-icon">
      <img src=${instagram} alt="instagram" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCV6lZ1qluM95bZCnxl6_lmg"
      target="_blank"
      class="social-icon"
    >
      <img src=${youtube} alt="youtube" />
    </a>
    <a href="https://github.com/Inun572" target="_blank" class="social-icon">
      <img src=${github} alt="github" />
    </a>
  </div>`;
};
