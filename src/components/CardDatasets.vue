<template>
    <v-card>
        <v-card-title primary-title>
            <h2 class="pr-2">{{ dataset.title }}</h2>
            
            <app-chip-card :name="dataset.initialCategory.toUpperCase()" />
            <app-chip-card :name="dataset.juvenileAdult.toUpperCase()" />
        </v-card-title>

        <v-divider />
        
        <div>
            <v-layout row wrap>
                <v-flex
                    xs12
                    >
                    <v-container class="small sans-serif py-2">
                        <span class="bold pr-2">Keywords</span>

                        <span v-if="dataset.keywords">
                            <span
                                class="pr-2"
                                v-for="(keyword, i) in dataset.keywords"
                                :key="i"
                                >
                                {{ keyword.toUpperCase() }}
                            </span>
                        </span>
                        
                        <span v-else class="italic">No keywords</span>
                    </v-container>

                    <v-container
                        class="py-2 small sans-serif hidden-sm-and-down"
                        >
                        <v-layout row wrap>
                            <v-flex sm2>
                                <div class="pb-2">
                                    <p class="ma-0 bold">Updated</p>
                                    {{ dataset.date }}
                                </div>
                            </v-flex>
                            <v-flex sm2>
                                <div class="pb-2">
                                    <p class="ma-0 bold">Time Period</p>
                                    {{ dataset.timePeriodDesc }}
                                </div>
                            </v-flex>
                            <v-flex sm8>
                                <div>
                                    <p class="ma-0 bold">Agency</p>
                                    <a :href="dataset.agencyLink">
                                        {{ dataset.agencyName }}
                                    </a>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-container>

                    <v-container
                        class="pt-0 small sans-serif hidden-md-and-up"
                        >
                        <div class="pb-2">
                            <span class="pr-2 ma-0 bold">Updated</span>
                            {{ dataset.date }}
                        </div>
                        <div class="pb-2">
                            <span class="pr-2 ma-0 bold">Time Period</span>
                            {{ dataset.timePeriodDesc }}
                        </div>
                        <div>
                            <span class="pr-2 ma-0 bold">Agency</span>
                            <a :href="dataset.agencyLink">
                                {{ dataset.agencyName }}
                            </a>
                        </div>
                    </v-container>

                    <v-container
                        class="pa-0 text-xs-right"
                        >
                        <v-btn flat>
                            Download
                            <v-icon>file_download</v-icon>
                        </v-btn>
                        
                        <v-btn
                            flat
                            :to="`/dataset/${dataset.filename}`"
                            >
                            More
                            <v-icon>more_horiz</v-icon>
                        </v-btn>
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
    computed: {
        dataset () {
            return this.item;
        }
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