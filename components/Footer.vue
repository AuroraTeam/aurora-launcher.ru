<template>
  <footer class="row align-items-center">
    <div class="col-3 col-sm-2 col-lg-1">
      <Logo hide="true" />
    </div>
    <div class="col-9 col-sm-10 col-md-7 col-lg-9">
      <ul class="list-inline m-0">
        <li class="list-inline-item">
          <a target="_blank" href="https://github.com/AuroraTeam">GitHub</a>
        </li>
        <li class="list-inline-item">
          <a target="_blank" href="https://discord.gg/2NvYTcv">Discord</a>
        </li>
      </ul>
      Aurora Team &copy; 2020-{{ new Date().getFullYear() }}
    </div>
    <div class="d-none d-md-block col-3 col-lg-2 text-right">
      by <a href="https://jocat.ru" target="_blank">JCat</a> as<br />
      <a href="https://aurora-team.ru" target="_blank">Aurora Team</a>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
footer
  padding: 15px 0
</style>
