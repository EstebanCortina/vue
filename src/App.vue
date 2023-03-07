<template>
  <header>
    <h1>Aprendiendo VUE.js</h1>
  </header>
  <section>
    <div class="titles">
      <h2>Básicos:</h2>
    </div>
    <div class="box">
      <h2>Importando componentes</h2>
      <ComponentExample />
    </div>
    <div class="box">
      <h2>Condicionales</h2>
      <ComponentIf />
      <p>Este componente solo renderiza la opcion correcta</p>
      <ComponentShow />
      <p>Este componente tiene renderizadas sus dos opciones pero solo se muestra una</p>
    </div>
    <div class="box">
      <h2>Ciclos</h2>
      <ComponentFor />
    </div>
    <div class="box">
      <h2>v-bind (tambien funciona solo con ':')</h2>
      <ClassAndBind />
    </div>
    <div class="box">
      <h2>v-on (click) al hacer referencias a variables esta el componente atento al cambio de estado para actualizarse
      </h2>
      <ReactiveComponent />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ComponentExample from "./components/ComponentExample.vue";
import ComponentIf from "./components/ComponentIf.vue";
import ComponentShow from "./components/ComponentShow.vue";
import ComponentFor from "./components/ComponentFor.vue";
import ClassAndBind from "./components/ClassAndBind.vue";
import ReactiveComponent from "./components/ReactiveComponents.vue";
</script>

<style scoped>
header {
  text-align: center;
}

.titles {
  background-color: rgb(40, 124, 40);
  text-align: center;
}

.box {
  border-style: solid;
  border-color: blueviolet;
  padding: 5px;
}
</style>
