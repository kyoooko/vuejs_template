// コンポーネント（よく使うUIの一部を共通化）
// Vue.component('hello-component',{
//   template: '<p>Hello</p>'
// })
// フィルタ（グローバルフィルタ）
Vue.filter('numberFormat',function(value){
  return value.toLocaleString()
})


// new Vue({ })で空のビューインスタンス作成。var app =はつけてもつけなくてもいい。慣例としてappやvmが使われる。ビューインスタンスを変数化（var 変数名)することでコンソールからアクセスできる
var app = new Vue({ 
  // #appの部分が対象
  el: '#app',
  data:{
    message: 'Hello,vue.js!',
    price:298000
  },
  methods:{
    clickHandler:function(event){
      // デバッグ
      // alert('テスト);
      this.message = this.message.split('').reverse().join('')
    }
  },
  // フィルタ（ローカルフィルタ）
  filters:{
    numberFormat: function(value){
      return value.toLocaleString()
    }
  }
})