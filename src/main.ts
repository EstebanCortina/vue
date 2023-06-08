import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-big', {
  beforeMount(elm, binding) {
    elm.style.fontSize = "70px";
  }
})

app.directive('font-custom', {
  beforeMount(elm, binding) {
    elm.style.fontSize = binding.value;
  }
})

app.directive('font-auto', {
  beforeMount(elm, binding) {
    let size = 0;
    switch (binding.arg) {
      case 'sm':
        size = 20;
        break;
      case 'md':
        size = 40;
        break;
      case 'xl':
        size = 60;
        break;
    }
    elm.style.fontSize = size + 'px';
  }
})

app.directive('font-color', {
  beforeMount(elm, binding) {
    let size = 10;
    if (binding.modifiers.xl) {
      size = 60;
    }
    elm.style.fontSize = size + 'px';
    if (binding.modifiers.green) {
      elm.style.color = 'green';
    }
  }
})

app.mount('#app')
