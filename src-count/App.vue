<template>
  <div>
    <p>click {{count}} times,counts is {{ evenOradd }}</p>
    <button @click="jiafa">+</button>
    <button @click="jianfa">-</button>
    <button @click="jishu">increment if add</button>
    <button @click="yibu">increment async</button>
  </div>
</template>

<script>
    export default {
        name: "App",
      data(){
          return{
            count:0
          }
      },
      computed:{
          evenOradd(){
            return this.count%2===0 ? "奇数" : "偶数"
          }
      },
      methods:{
        jiafa(){
          const count = this.count
          this.count = count + 1
        },
        jianfa(){
          const count = this.count
          this.count = count - 1
        },
        //如果是奇数才增加
        jishu(){
          const count = this.count
          if(count%2===1){
            this.count = count + 1
          }
        },
        //过一秒增加
        yibu(){
          setTimeout(()=>{
            const count = this.count
            this.count = count + 1
          },1000)
        }
      }
    }
</script>

<style scoped>

</style>
