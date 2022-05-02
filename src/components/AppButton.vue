<template>
  <button type="button" class="button" :class="typeClasses">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  },
  computed: {
    typeClasses () {
      switch (this.type) {
        case 'danger':
          return 'bg-red'

        case 'coloured':
          return 'coloured'

        case 'transparent':
          return 'transparent'

        default:
          return 'coloured'
      }
    }
  }
}
</script>

<style lang="css" scoped>
.button {
  @apply  px-4 mx-1 -my-3 py-4 font-medium uppercase text-sm rounded border;
  border-color: #662D91;
}

.coloured
{
  background-color: #662D91;
  color: #ffffff;
  transition: background 0.3s;
}


.coloured:hover
{
  background-color: #92278F;
  color: #ffffff;
}

.transparent
{
  color: #662D91;
  background-color: #ffffff;
  transition: background 0.3s;
}

.transparent:hover
{
  background-color: #92278F;
  color: #ffffff;
}

</style>
