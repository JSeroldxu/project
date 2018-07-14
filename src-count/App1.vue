<template>
  <div>
    <!--省略$store.state-->
    <p>click {{count}} times,counts is {{ evenOradd }}</p>
    <button @click="jiafa">+</button>
    <button @click="jianfa">-</button>
    <button @click="jishu">increment if add</button>
    <button @click="yibu">increment async</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
      computed:{
        //mapstate()返回值：{count(){return this.$store.state['count']}}
        ...mapState(['count']),
        //mapGetter()返回值：{evenOradd(){return this.$store.state['evenOradd']}}
        ...mapGetters(['evenOradd'])
          // evenOradd(){
          //   return this.$store.getters.evenOradd
          // }
      },
      methods:{
        ...mapActions(['jiafa','jianfa','jishu','yibu'])
      }
      /*methods:{
        jiafa(){
          //通知vuex去增加
          this.$store.dispatch('jiafa')
          //触发store中对应的action调用
        },
        jianfa(){
          this.$store.dispatch('jianfa')
        },
        //如果是奇数才增加
        jishu(){
          this.$store.dispatch('jishu')
        },
        //过一秒增加
        yibu(){
          this.$store.dispatch('yibu')
        }
      }*/
    }
</script>

<style scoped>

</style>
