import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
createApp(App).use(ElementPlus).use(Layui).mount('#app')
