import { createApp } from 'vue'
import App from './App.vue'

// Import UIkit CSS & JS
import 'uikit/dist/css/uikit.min.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'


// Use the Icons plugin
UIkit.use(Icons)

createApp(App).mount('#app')
