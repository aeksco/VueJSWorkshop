<template>
  <div id='app' class='container'>
    <HelloWorld/>
    <!-- <VueComponent/> -->
    <!-- <DataComponent/> -->
    <!-- <VModel/> -->
    <!-- <Conditionals/> -->
    <!-- <VBind/> -->
    <!-- <ComputedComponent/> -->
    <!-- <VonComponent/> -->
    <!-- <MethodsComponent/> -->
    <!-- <VForComponent/> -->
    <!-- <TodoList/> -->
    <!-- <NextSteps/> -->
  </div>
</template>

<script>
import HelloWorld from './components/00-Hello';
import VueComponent from './components/01-VueComponent';
import DataComponent from './components/02-Data';
import VModel from './components/03-V-Model';
import Conditionals from './components/04-Conditionals';
import VBind from './components/05-V-Bind';
import ComputedComponent from './components/06-Computed';
import VonComponent from './components/07-V-On';
import MethodsComponent from './components/08-Methods';
import VForComponent from './components/09-V-For';
import TodoList from './components/10-TodoList';
import NextSteps from './components/11-NextSteps';

export default {
  name: 'App',
  components: {
    HelloWorld,
    VueComponent,
    DataComponent,
    VModel,
    Conditionals,
    VBind,
    ComputedComponent,
    VonComponent,
    MethodsComponent,
    VForComponent,
    TodoList,
    NextSteps
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
