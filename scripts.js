
list = []
const toDoList = {
    data() {
        return {
            todo_list: window.list,
            newList:{}
            
        }
    },
    methods: {
        addTodo:function (){

            if (this.newList.todo) {
                this.newList.done = false;
                this.todo_list.push(this.newList)
                this.newList = {}

                localStorage.setItem("todos", JSON.stringify(this.todo_list) )
            }else{
                alert("Acivité vide")
            }
            
        },

        clearAll: function () {
            this.todo_list = this.list = []
        },
        storeTodos() {
            localStorage.setItem("todos", JSON.stringify(this.todo_list) )
        },
    },
    
    created() {
       this.todo_list = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos") ): this.todo_list
    },
    // updated() {
    //     localStorage.setItem("todos", JSON.stringify(this.todo_list) )
    // },

}

Vue.createApp(toDoList).mount('#app')
