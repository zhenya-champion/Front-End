new Vue({
  el: '#app',
  data: {
    // Для хранения данных из поля
    userText: '',
    // Список для всех элементов массива
    toDoList: []
  },
  methods: {
    // Метод для добавления данных в список
    addToList() {
      if(this.userText) {
        // Добавляем новый элемент в конец массива
        this.toDoList.push(this.userText);
        this.userText = '';
      }
    },
    // Метод для удаления записи по его ID
    deleteItem(id) {
      // Удаляем элемент по его ID
      this.toDoList.splice(id, 1);
    }
  },
  filters: {
    // Фильтр для обрезки лишних пробелов
    trim(val) {
      return val.trim();
    }
  }
});
