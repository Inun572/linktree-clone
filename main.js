import './style.css';

import { footer } from './components/footer';
import { profile } from './components/profile';
import { social } from './components/social';
import { links } from './components/links';

document.querySelector('#app').innerHTML = `<div id="root">
<div class="wrapper">
  ${profile()}
  ${social()}
  ${links()}  
  ${footer()}
</div>
</div>`;
