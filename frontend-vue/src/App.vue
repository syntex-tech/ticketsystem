<template>
  <h1>This is a simple {{name}} - Test age: {{age}}</h1>
</template>

<script setup>
  import {ref} from 'vue'

  const name = ref ('Test')
  const age = ref ('21')
</script>

<!--
<script>
import {ref} from 'vue'

export default {
  setup() {
    const name = ref ('Test')
    const age = ref ('21')

    return {
      name,
      age
    }
  }
}
</script>
-->