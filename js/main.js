// new Vue({ })で空のビューインスタンス作成。var app =はつけてもつけなくてもいい。慣例としてappやvmが使われる。ビューインスタンスを変数化（var 変数名)することでコンソールからアクセスできる
var app = new Vue({ 
  // #appの部分が対象
  el: '#app',
  data:{
    // ◆v-if とv-else
    // ◆v-show 
    toggle:true,
    // ◆v-else-if
    color:'green'
  }
})