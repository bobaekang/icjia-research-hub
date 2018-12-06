<template>
    <div>        
        <app-view-title :title="title"></app-view-title>

        <v-container grid-list-sm>
            <v-layout row wrap>
                <v-flex
                    xs10
                    offset-xs1
                    class="about-item"
                    >
                    <h2 class="section-title">This Data Portal</h2>

                    <div class="spacer"></div>
                    
                    <h3>Open data, open research, open government</h3>
                    <p>Explain the goals and purposes of the Data Portal here.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptas laboriosam ab recusandae excepturi eaque dolor id ex reiciendis possimus itaque labore natus quibusdam mollitia perspiciatis facere, dolores quam! Explicabo, magni. Doloremque, corporis ab saepe culpa aliquid dolorem debitis nam!</p>
                    
                    <div class="spacer"></div>

                    <h3>Open source technology</h3>
                    <p>
                        The Data Portal is powered by popular open source projects, such as
                        <a href="https://vuejs.org/">Vue.js<v-icon>open_in_new</v-icon></a> and
                        <a href="https://vuetifyjs.com/">Vuetify<v-icon>open_in_new</v-icon></a>,
                        and developed publicly on
                        <a href="#">GitHub<v-icon>open_in_new</v-icon></a>.
                    </p>
                    
                    <div class="spacer"></div>

                    <h3>Asking for your feedback and contribution</h3>
                    <p>Explain how to provide feedback and contribution.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo odio repellendus, quam minus dicta expedita corporis molestiae sequi asperiores!</p>

                </v-flex>

                <v-flex
                    xs10
                    offset-xs1
                    class="about-item"
                    >
                    <h2 class="section-title">Illinois Open Data Portal</h2>
                    
                    <p></p>
                    
                    <p>
                        The State of Illinois offers a state-wide open data portal, which
                        lets you find data across state, facts about your state, create maps and graphs,
                        and freely download the data for your own analysis. Many of these datasets are
                        updated daily, and some even more often.
                    </p>
                    <p>
                        On March 10, 2014, the Illinois General Assembly unanimously passed PA 98-0627,
                        a bill introduced by the Governor's Office and intended to increase transparency,
                        accountability and savings in government by establishing a new State Open Operating
                        Standard.
                    </p>
                    <p>
                        For more information, please visit
                        <a href="https://data.illinois.gov/">Illinois Open Data Portal<v-icon>open_in_new</v-icon></a>.
                    </p>
                </v-flex>

                <v-flex
                    xs10
                    offset-xs1
                    class="about-item about-item-last"
                    >
                    <h2 class="section-title">Illinois Criminal Justice Information Authority</h2>
                    
                    <p></p>
                    
                    <p>
                        Created in 1983, the Illinois Criminal Justice Information Authority (ICJIA)
                        is a state agency dedicated to improving the administration of criminal justice.
                    </p>
                    <p>
                        ICJIA brings together key leaders from the justice system and the public
                        to identify critical issues facing the criminal justice system in Illinois,
                        and to propose and evaluate policies, programs, and legislation that address
                        those issues. The agency also works to ensure the criminal justice system
                        in Illinois is efficient and effective. ICJIA’s specific powers
                        and duties are detailed in the Illinois Criminal Justice Information Act
                        [<a href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5">
                        20 ILCS 3930 et. seq.<v-icon>open_in_new</v-icon></a> ].
                    </p>
                    <p>
                        The statutory responsibilities of ICJIA fall under the categories
                        of grants administration, research and analysis, policy and planning,
                        and information systems and technology.
                    </p>
                    <p>
                        For more information about ICJIA, please visit
                        <a href="http://www.icjia.state.il.us">the official website<v-icon>open_in_new</v-icon></a>.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import AppViewTitle from '../components/ViewTitle'

export default {
    name: 'about',
    data () {
        return {
            title: "About"
        }
    },
    components: {
        AppViewTitle
    }
}
</script>

<style scoped>
.spacer {
    height: 16px;
}

.about-item {
    margin-bottom: 28px;
    border-bottom: 1px solid #ccc;
}

.about-item-last {
    border-bottom: 0;
}
</style>