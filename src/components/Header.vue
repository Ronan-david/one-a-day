<template>
    <header class="header">
        <nav class="header__nav">
            <ul class="header__ul">
                <li v-for="(link, index) in links" :key="index" class="header__li">
                    <router-link :to="link.path" class="header__link">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  setup() {
    const links = [
      {
        name: 'Accueil',
        path: '/accueil'
      },
      {
        name: 'Déchets',
        path: '/dechets'
      },
      {
        name: 'Historique',
        path: '/historique'
      }
    ]
    return {
      links
    }
  }
}
</script>
<style lang="scss">
.header {
  width: 100%;
  height: 5rem;
  background-color: #6388f0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);

  &__nav {
    height: 100%;
  }

  &__ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__li {
    margin: 0 1rem;
  }

  &__link {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    
    @include for-tablet-portrait-up {
      font-size: 1.25rem;
    }

    &:hover,
    &:active,
    &.router-link-active {
      border-bottom: 2px solid white;
    }
  }
}






</style>