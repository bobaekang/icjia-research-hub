<template>
    <v-card>
        <v-card-title primary-title>
            <h2>
                <span
                    class="small pl-2"
                    style="color: #666"
                    >
                    Dataset
                </span>
                
                <v-icon>chevron_right</v-icon>
                
                {{ dataset.title }}
            </h2>

            <v-spacer />

            <v-btn flat class="mr-0">
                Download
                <v-icon>file_download</v-icon>
            </v-btn>

            <v-btn flat class="mr-0">
                API
                <v-icon>code</v-icon>
            </v-btn>

            <v-btn
                flat
                exact
                to="/dataset"
                >
                Back
            </v-btn>
        </v-card-title>

        <v-divider />
        
        <v-container>
            <h3 class="pb-2">About this dataset</h3>

            <div class="small sans-serif">
                <div class="py-1">
                    <span class="pr-2 bold">Updated</span>
                    {{ dataset.date }}
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Agency</span>
                    <a :href="dataset.agencyLink">
                        {{ dataset.agencyName }}
                    </a>
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Category</span>
                    {{ dataset.initialCategory }}
                </div>

                <div class="py-1">
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
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Time Period</span>
                    {{ dataset.timePeriodDesc }}
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Age group</span>
                    {{ dataset.juvenileAdult }}
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<script>
export default {
    props: {
        item: Object,
    },
    computed: {
        dataset () {
            return this.item;
        }
    },
}
</script>

<style>
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
</style>