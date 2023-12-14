import './index.css';
import 'preline';

import { footer } from './components/footer';
import { profile } from './components/profile';
import { social } from './components/social';
import { links } from './components/links';

document.querySelector('#app').innerHTML = `<div id="root class="bg-orange-300">
<div class="w-[492px] h-screen mx-auto grid grid-flow-row shadow-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
  ${profile()}
  ${social()}
  ${links()}  
  ${footer()}
</div>
</div>`;
