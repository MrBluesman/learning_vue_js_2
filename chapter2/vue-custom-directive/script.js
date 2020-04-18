Vue.directive('square', function (el, binding) {
  el.innerHTML = Math.pow(binding.value, 2);
});

new Vue({
  el: '#app',
  data: function () {
    return {
      item: 42,
    };
  }
});
