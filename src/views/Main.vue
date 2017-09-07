<template>
  <div class="mailbox-bh">
      <button @click="alertFn">alert</button>
      <button @click="confirmFn">confirm</button>
      <button @click="toastFn">toast</button>
      <button @click="promptFn">prompt</button>

      <button @click="loadingFn">loading</button>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  created() {

  },
  computed: {
  },
  methods: {
      ...mapActions(['loading_action']),
      loadingFn() {
          this.loading_action(true);
      },
      alertFn() {
        this.$alert('欢迎使用 wc-messagebox', {
          title: '提示',
          btn: {
            text: '确定'
          }
        })
        .then(()=>{
          this.$toast('你点击了确定');
        })
      },

      confirmFn() {
        this.$confirm('欢迎使用 wc-messagebox', {
          title: '提示',
          style: {
            'font-size': '12px'
          },
          yes: {
            text: '新按钮',
            style: {
              'font-size': '16px'
            }
          }
        }).then(()=>{
            this.$toast('你点击了确定');
          }).catch(()=>{
            this.$toast('你点击了取消');
          })
      },
      toastFn() {
        this.$toast('恭喜您, 登录成功!', 2000);
      },

      promptFn() {
          this.$prompt('hello world', {
            title: '日了狗了',
            placeholder: '到底有没有日狗',
            style: {
              'color':'red'
            }
        }).then(v => {
            // console.log(v)
            this.$toast('你的答案是:' + v);
          })
      }
    
    

  }

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  * {
    margin: 0;
  }
</style>
