import { createApp, ref } from 'vue'

const app = createApp({

    setup() {
        const title = ref('frozenfish')
        //箭头函数
        const qq = () => {
            alert('正在跳转qq');
            window.location.href= "https://qm.qq.com/cgi-bin/qm/qr?k=XUmMcJ7-4mYjFrftNXJ84VIDOgBRm2Jt" 
        }
        const gayhub = () => {
            alert('正在跳转gayhub');
            window.location.href= "https://github.com/frozenfish0x" 
        }
        const gitee = () => {
            alert('正在跳转gitee');
            window.location.href= "https://gitee.com/frozenfish0x" 
        }
       
        return {
            title,qq,gayhub,gitee
        }
        
    },
    mounted() {
        //console.log("this.count") // 0
        
      }
      
})

app.mount('#app')

app.config.errorHandler = (err) => {
    /* 处理错误 */
}

