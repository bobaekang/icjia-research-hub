<template>
    <div>
        <v-toolbar
            id="toolbar"
            :height="hpixel"
            fixed
            scroll-off-screen
            >
            <a :href="logo.href" target="_blank">
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

            <v-toolbar-items>
                <v-btn
                    v-for="view in views"
                    :key="view"
                    :to="`/${view}`"
                    flat
                    >
                    {{ view }}
                </v-btn>   
            </v-toolbar-items>
        </v-toolbar>

        <div :style="{ height: hpixel }"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            height: 75,
            title: 'ICJIA data portal',
            views: [
                'dataset',
                'research',
                'apps',
                'resources',
                'about'
            ],
            logo: {
                url: 'http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png',
                href: 'http://www.icjia.state.il.us'
            }
        }
    },
    computed: {
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
}
</style>
