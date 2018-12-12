<template>
    <v-card>
        <v-card-title primary-title>
            <h2 class="pr-2">{{ item.title }}</h2>
            
            <app-chip-card :name="item.initialCategory" />
            <app-chip-card :name="item.juvenileAdult" />
        </v-card-title>

        <v-divider />
        
        <div>
            <v-layout row wrap>
                <v-flex
                    xs12
                    sm9
                    >
                    <v-container class="small sans-serif py-2">
                        <span class="bold pr-2">Keywords</span>
                        <span
                            v-if="item.keywords"
                            >
                            <span
                                v-for="(keyword, i) in item.keywords"
                                :key="i">
                                {{ item.keywords }}
                            </span>
                        </span>
                        <span class="italic">No keywords</span>
                    </v-container>

                    <v-container>
                        {{ item.summary }}
                    </v-container>
                </v-flex>
                
                <v-divider
                    vertical
                    class="hidden-sm-and-down"
                    />

                <v-flex
                    sm2
                    class="small sans-serif hidden-sm-and-down"
                    >
                    <v-container
                        class="py-2"
                        >
                        <div class="pb-2">
                            <p class="ma-0 bold">Updated</p>
                            {{ item.date }}
                        </div>
                        <div class="pb-2">
                            <p class="ma-0 bold">Time Period</p>
                            {{ item.timePeriodDesc }}
                        </div>
                        <div>
                            <p class="ma-0 bold">Agency</p>
                            <a :href="item.agencyLink">
                                {{ item.agencyName }}
                            </a>
                        </div>
                    </v-container>
                </v-flex>

                <v-flex
                    xs12
                    class="small sans-serif hidden-md-and-up"
                    >
                    <v-divider />
                    <v-container
                        class="py-2"
                        >
                        <div class="pb-2">
                            <span class="ma-0 bold">Updated</span>
                            {{ item.date }}
                        </div>
                        <div class="pb-2">
                            <span class="ma-0 bold">Time Period</span>
                            {{ item.timePeriodDesc }}
                        </div>
                        <div>
                            <span class="ma-0 bold">Agency</span>
                            <a :href="item.agencyLink">
                                {{ item.agencyName }}
                            </a>
                        </div>
                    </v-container>
                </v-flex>
            </v-layout>
        </div>
    </v-card>
</template>

<script>
import AppChipCard from './ChipCard';

export default {
    props: {
        item: Object,
    },
    components: {
        AppChipCard,
    }
}
</script>

<style scoped>
.sans-serif {
    font-family: 'Lato', sans-serif;
}

.small {
    font-size: 0.8em
}

.bold {
    font-weight: bold;
}

.italic {
    font-style: italic;
}

.uppercase {
    text-transform: uppercase;
}
</style>