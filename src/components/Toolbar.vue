<template>
    <div>
        <v-toolbar
            id="toolbar"
            absolute>
            <router-link to="/">
                <v-toolbar-title>
                    ICJIA DATA PORTAL
                </v-toolbar-title>
            </router-link>
        
            <v-spacer></v-spacer>

            <v-toolbar-items>
                <v-btn to="/data" flat>
                    DATA
                </v-btn>
                
                <v-btn to="/research" flat>
                    RESEARCH
                </v-btn>
                
                <v-btn to="/apps" flat>
                    APPS
                </v-btn>
                
                <v-menu offset-y>
                    <v-btn slot="activator" flat>
                        RESOURCES
                    </v-btn>
                    <v-list>
                        <v-list-tile
                            to="/Resources/User"
                            ripple>
                            <span class="body-1">USER</span>
                        </v-list-tile>
                        <v-list-tile
                            to="/Resources/Developer"
                            ripple>
                            <span class="body-1">DEVELOPER</span>
                        </v-list-tile>
                    </v-list>
                </v-menu>
                
                <v-btn to="/about" flat>
                    ABOUT
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <div style="height:75px">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    text-decoration:none;
    color:rgba(0,0,0,.87);
}

#toolbar {
    font-family: 'Lato'
}
</style>
