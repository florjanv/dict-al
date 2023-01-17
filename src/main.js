import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import { library, dom } from "@fortawesome/fontawesome-svg-core";//font awesome
import { fas } from '@fortawesome/free-solid-svg-icons';//font awesome
import { fab } from '@fortawesome/free-brands-svg-icons';//font awesome
import { far } from '@fortawesome/free-regular-svg-icons';//font awesome
import 'bulma/css/bulma.css';


library.add(fas, far, fab); //font awesome
dom.watch();//font awesome

createApp(App).use(router).mount('#app');
