<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>

      <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteCompeteTodos="deleteCompeteTodos"   :selectAllTodos="selectAllTodos"/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'

    export default {
        data(){
          return{
            //从localStorage读取todo
            todos:JSON.parse(window.localStorage.getItem('todos_key') || '[]')
          }
        },
        methods:{
          addTodo(todo){//接收todo
            this.todos.unshift(todo)//添加到第一个todo上面，title[0]
          },
          //删除
          deleteTodo(index){
            this.todos.splice(index,1)
          },
          //删除所有选中的todo
          deleteCompeteTodos(){
            //过滤出false的留下todo.complete取反
            this.todos = this.todos.filter(todo=>!todo.complete)
          },
          //全选/全不选
          selectAllTodos(check){//状态变化所以传参数
            //遍历todos改变check状态
            this.todos.forEach(todo => todo.complete = check)
          }
        },

        watch:{//深度监视
          todos:{
            deep:true,//声明我是深度监视
            handler:function(value){
              //将todos最新的值de json数据，保存到localStorage
              window.localStorage.setItem('todos_key',JSON.stringify(value))
            }
          }
        },

        components:{
          TodoHeader,
          TodoList,
          TodoFooter
        }
    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
