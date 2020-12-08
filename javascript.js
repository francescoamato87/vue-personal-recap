const app = new Vue({
  el: '#applicazione_isjeady',
  data:{
    message: 'Ciao da Francesco',
    mioArray: ['Luigi', 'Alessia' , 'Alessandra'],
    automobile: {
      colore: 'rosso',
      cerchi: 'lega',   // <--  oggetto
      autoradio: 'si'
    },
    linkImg:'https://images.ctfassets.net/cj4mgtttlyx7/3vTqPUjG5hKIFft0KVE2ox/8c6f7edb5ed967d57ddba3679536143c/error_tracking_with_vue.jpg?w=668&q=50',

    myHtml: '<h4>Francesco</h4>'
  },
  methods: {
    cambioImg(){
      this.linkImg = 'https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg';
    }
  }
});

const app_2 = new Vue ({
  el:'#contatore',
  data:{
    min: 0,
    max: 10,
    counter: '10'
  },
  methods : {
    changeCounter(direction){
      console.log("changeCounter :" + direction);
      if(direction == '+'){
        if(this.counter < this.max)
            this.counter++;
      }else if(direction == '-'){
          if(this.counter > this.min){
        this.counter--;
        }
      }
    }
  }
});
