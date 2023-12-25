import photo from '../assets/img/profile2_square.jpg';

export const profile = () => {
  return `<div class="profile">
    <img src=${photo} alt="avatar" />
    <h3 class="name">Helmi Ainun</h3>
    <h6 class="title">Junior Front End Developer</h6>
  </div>`;
};
