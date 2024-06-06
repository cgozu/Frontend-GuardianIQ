

import { createApp } from 'vue'
import App from './App.vue'
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';

import router from "./router/router.js";
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';

import { i18n } from './i18n/i18n.js'
import Sidebar from 'primevue/sidebar';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';                           // Icons
import 'primeflex/primeflex.css';
import ToastService         from 'primevue/toastservice';
import ConfirmationService  from "primevue/confirmationservice";
import DialogService        from "primevue/dialogservice";

// PrimeVue Components
import DataTable        from "primevue/datatable";
import Column           from "primevue/column";
import ConfirmDialog    from "primevue/confirmdialog";
import Row              from "primevue/row";

import InputText        from "primevue/inputtext";
import Textarea         from "primevue/textarea";
import Menu             from "primevue/menu";
import Dialog           from "primevue/dialog";
import Toast            from "primevue/toast";
import Tag              from "primevue/tag";
import FileUpload       from "primevue/fileupload";
import IconField        from "primevue/iconfield";
import InputIcon        from "primevue/inputicon";
import InputNumber      from "primevue/inputnumber";
import FloatLabel       from "primevue/floatlabel";

import Rating           from "primevue/rating";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import Ripple from 'primevue/ripple';

app.directive('ripple', Ripple);

app.use(router);
app.use(PrimeVue,{ ripple: true });
app.use(i18n);
app.use(DialogService);
app.use(ConfirmationService);
app.use(ToastService);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.mount('#app');
app.component('Sidebar', Sidebar);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('Dropdown', Dropdown);
app.component('pv-button',         Button)
app.component('pv-card',           Card)
app.component('pv-column',         Column)
app.component('pv-confirm-dialog', ConfirmDialog)
app.component('pv-checkbox',       Checkbox)
app.component('pv-data-table',     DataTable)
app.component('pv-dialog',         Dialog)
app.component('pv-dropdown',       Dropdown)
    app.component('pv-file-upload',    FileUpload)
    app.component('pv-float-label',    FloatLabel)
    app.component('pv-icon-field',     IconField)
    app.component('pv-input-icon',     InputIcon)
    app.component('pv-input-text',     InputText)
    app.component('pv-input-number',   InputNumber)
    app.component('pv-menu',           Menu)
    app.component('pv-rating',         Rating)
    app.component('pv-row',            Row)
    app.component('pv-sidebar',        Sidebar)
    app.component('pv-tag',            Tag)
    app.component('pv-textarea',       Textarea)
    app.component('pv-toolbar',        Toolbar)
    app.component('pv-toast',          Toast)

