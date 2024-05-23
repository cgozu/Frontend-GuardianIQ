
import 'primeflex/primeflex.css';
import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import router from "./router/router.js";
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import '@fortawesome/fontawesome-free/css/all.css'
import { i18n } from './i18n/i18n.js'
import Sidebar from 'primevue/sidebar';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';
import 'primevue/resources/themes/saga-blue/theme.css';       // Theme
import 'primevue/resources/primevue.min.css';                 // Core CSS
import 'primeicons/primeicons.css';                           // Icons
import 'primeflex/primeflex.css';

const app = createApp(App);

import StyleClass from 'primevue/styleclass';
import Ripple from 'primevue/ripple';

app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.mount('#app');
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('Dropdown', Dropdown);
