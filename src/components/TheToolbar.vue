<template>
    <div>
        <v-toolbar
            id="toolbar"
            :height="hpixel"
            fixed
            scroll-off-screen
            >
            <v-menu
                offset-y
                class="hidden-md-and-up"
                >
                <v-btn
                    slot="activator"
                    flat
                    >
                    <v-icon>menu</v-icon>
                </v-btn>
                
                <v-list>
                    <v-list-tile
                        v-for="(view, i) in views"
                        :key="i"
                        :to="`/${view}`"
                        >
                        <v-list-tile-title class="slot">
                            {{ view }}
                        </v-list-tile-title>
                    </v-list-tile>
                    
                    <v-list-tile
                        :href="docs_url"
                        >
                        <v-list-tile-title class="slot">
                            documentation
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>


            <a
                class="hidden-sm-and-down"
                :href="logo.href"
                target="_blank"
                >
                <img
                    :src="logo.url"
                    :height="logoHpixel"
                    alt="logo"
                    >
            </a>

            <router-link to="/">
                <v-toolbar-title>
                    {{ titleUpper }}
                </v-toolbar-title>
            </router-link>
        
            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    v-for="view in views"
                    :key="view"
                    :to="`/${view}`"
                    flat
                    >
                    {{ view }}
                </v-btn>

                <v-btn
                    :href="docs_url"
                    target="_blank"
                    flat
                    >
                    documentation
                </v-btn>


            </v-toolbar-items>

            
        </v-toolbar>

        <div :style="{ height: hpixel, backgroundColor:'#466c8c' }"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            height: 75,
            title: 'ICJIA Research Hub',
            views: [
                'about',
                'apps',
                'article',
                'dataset',
            ],
            logo: {
                url: 'http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png',
                href: 'http://www.icjia.state.il.us'
            }
        }
    },
    computed: {
        ...mapGetters({
            docs_url: 'docs_url'
        }),
        titleUpper () {
            return this.title.toUpperCase()
        },
        hpixel () {
            return `${this.height}px`
        },
        logoHpixel () {
            return `${this.height * 0.85}px`
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: rgba(0,0,0,.87);
}

img {
    margin-right: 10px;
}

#toolbar {
    font-family: 'Lato';
    box-shadow: 0 2px rgba(0, 0, 0, 0.2);
}

.slot {
    font-family: 'Lato';
    font-size: 0.8em;
    text-transform: uppercase;
    text-align: center;
}
</style>
