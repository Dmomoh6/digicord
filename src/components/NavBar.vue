<template>
  <div id="nav" class="flex navbar shadow-md">
    <div class="flex-1 ml-10 flex justify-start logo">
      <router-link :to="{ name: 'board' }">
        <img v-if="!widthtrue"  alt="digicord" src="../assets/logo.png"
      />     <img v-if="widthtrue" alt="digicord" src="../assets/icon.png"
      /></router-link>
    </div>
    <div class="flex-1 mu-10 text-center uppercase board-title">
      {{ active.board.name}}
    </div>
    <div class="flex-1 mr-10 navitems justify-end">

      <AppButton @click.native="switchBoard" >Switch Boards</AppButton>
      <AppButton @click.native="renameBoard" class="transparent" >Rename Board</AppButton>
    </div>
  </div>
</template>

<style scoped>
#nav
{
  padding: 25px 0 15px 0;    box-sizing: border-box;
  box-shadow: 2px #662D91;
  background-color: white;
}

.logo img
{
  max-width: 150px
}

@media(max-width: 969px){
.logo img
{
  max-width: 50px
}

.logo{
  @apply ml-4;
}

.navitems
{
  @apply mr-4;
}

.board-title
{
  margin-top: 15px !important;
  position: relative;
  overflow: hidden;
  padding-right: 10px;
  margin-left: -80px;

}

.navitems > button
{
  font-size: 11px;
  margin: 0;
  margin-right: 6px;
  padding: 0;
}

}

.navbar
{
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.board-title
{
  color: #662D91;
  font-weight: 600;
  font-size: 17.5px;
  margin-top: 5px;
}

.navitems
{
  display: flex;

}

.navitems > button
{
    margin-bottom: 0px !important;
}

</style>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      width: window.innerWidth
    }
  },
  computed: {
    ...mapState(['active']),
    boardName () {
      return this.active.board.name
    },
    widthtrue () {
      return this.width < 969
    }
  },
  created () {
    window.addEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      this.width = window.innerWidth
    },
    renameBoard () {
      this.goToBoard(this.active.board.id)
    },
    goToBoard (boardid) {
      this.$router.push({ name: 'board-name', params: { id: boardid } })
    },
    switchBoard () {
      this.$router.push({ name: 'board-list' })
    }
  }
}
</script>
