<template>
  <div class="dashboard-container">
    多希望还能再像个孩子，快乐的做个傻子
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
  }
}
</script>
