<template>
    <v-card>
        <v-card-title primary-title>
            <h2>
                <span
                    class="small pl-2"
                    style="color: #666"
                    >
                    Datasets
                </span>
                
                <v-icon>chevron_right</v-icon>
                
                {{ dataset.title }}
            </h2>

            <v-spacer />

            <simple-download-button :data="dataset.data" />

            <v-btn
                flat
                exact
                to="/datasets"
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
                    <span class="pr-2 bold">Sources</span>
                    <span
                        v-for="(source, i) in dataset.sources"
                        :key="i"
                        >
                        <a :href="source.url">
                            {{ source.title }}
                        </a>
                    </span>
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Categories</span>
                    <span
                        v-for="(category, i) in dataset.categories"
                        :key="i"
                        >
                        {{ category }}
                    </span>
                </div>

                <div class="py-1">
                    <span class="bold pr-2">Tags</span>

                    <span v-if="dataset.tags">
                        <span
                            class="pr-2"
                            v-for="(keyword, i) in dataset.tags"
                            :key="i"
                            >
                            {{ keyword.toUpperCase() }}
                        </span>
                    </span>
                    
                    <span v-else class="italic">No tags</span>
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Time Period</span>
                    {{ dataset.timeperiod }}
                </div>

                <div class="py-1">
                    <span class="pr-2 bold">Age group</span>
                    {{ dataset.agegroup }}
                </div>
            </div>
        </v-container>
    </v-card>
</template>

<script>
import SimpleDownloadButton from './SimpleDownloadButton';

export default {
    components: {
        SimpleDownloadButton,
    },
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