<style scoped lang="scss">
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
.red{
  .test{
    color:blue !important;
  }
}
</style>

<template>
  <div class="container">
    <h2 class="red">{{msg}} <div class="test">test</div>  </h2>
  </div>
</template>

<script>
import { getMessage } from '../services/message'

export default {
  data () {
    return {
      msg: getMessage()
    }
  }
}
</script>
