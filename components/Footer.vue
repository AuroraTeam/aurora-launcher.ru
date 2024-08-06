<template>
  <footer>
    <Logo :hide="true" />
    <div class="links">
      <a href="https://github.com/AuroraTeam" target="_blank" rel="noopener"
        >GitHub</a
      >
      <a href="https://discord.gg/2NvYTcv" target="_blank" rel="noopener"
        >Discord</a
      >
      <a
        href="https://www.youtube.com/@AuroraTeamRu"
        target="_blank"
        rel="noopener"
        >YouTube</a
      >
      <p>Aurora Team &copy; 2020-{{ new Date().getFullYear() }}</p>
    </div>
    <div class="copyrights">
      by
      <a href="https://jocat.ru" target="_blank" rel="noopener">JCat</a>
      as<br />
      <a href="https://aurora-team.ru" target="_blank" rel="noopener"
        >Aurora Team</a
      >
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  padding: 15px 0
  display: flex
  align-items: center
  justify-content: space-between
.links
  margin-left: 20px
  margin-right: auto
  a
    margin-right: 10px
  p
    margin-top: 0.5rem
    margin-bottom: 0
.copyrights
  @media (max-width: 575px)
    display: none
</style>
