<template>
    <div>
        <v-toolbar
            id="toolbar"
            :height=hpixel
            fixed
            scroll-off-screen>
            
            <a href="http://www.icjia.state.il.us" target="_blank">
                <img
                    src="http://www.icjia.state.il.us/_themes/icjia/img/logo-icjia-small-blue-3.png"
                    alt="ICJIA logo"
                    :height=logoHpixel
                    >
            </a>

            <router-link to="/">
                <v-toolbar-title>
                    ICJIA DATA PORTAL
                </v-toolbar-title>
            </router-link>
        
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn to='/dataset' flat>dataset</v-btn>
                <v-btn to="/research" flat>research</v-btn>
                <v-btn to="/apps" flat>apps</v-btn>
                <v-menu offset-y>
                    <v-btn slot="activator" flat>resources</v-btn>
                    <v-list>
                        <v-list-tile
                            to="/resources/user"
                            ripple>
                            <span class="body-1">
                                {{'user'.toUpperCase()}}
                            </span>
                        </v-list-tile>
                        <v-list-tile
                            to="/resources/developer"
                            ripple>
                            <span class="body-1">
                                {{'developer'.toUpperCase()}}
                            </span>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                <v-btn to="/about" flat>about</v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <div :style="{ height: hpixel }"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            height: 75
        }
    },
    computed: {
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
    text-decoration:none;
    color:rgba(0,0,0,.87);
}

img {
    margin-right: 10px;
}

#toolbar {
    font-family: 'Lato'
}
</style>
