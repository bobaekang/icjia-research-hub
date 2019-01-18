<template>
    <v-container>
        <v-layout
            justify-center
            row
            wrap
            >
            <v-flex
                xs12
                class="text-xs-center"
                >
                <h3>{{ titleUpper }}</h3>
                <v-icon>fa fa-caret-down</v-icon>
            </v-flex>
            
            <v-flex
                xs12
                md9
                xl6
                >
                <v-form @submit.prevent="onSubmit">
                    <v-text-field
                        @keyup.enter="submit"
                        v-model="search"
                        :label="`Search ${showLabel} in Data Portal`"
                        clearable=true
                        append-outer-icon="search"
                        solo
                        />
                </v-form>

                <v-radio-group
                    v-model="typeSelect"
                    class="py-0 my-0 sans-serif"
                    style="justify-content: center;"
                    row
                    >
                    <v-flex
                        v-for="(type, i) in types"
                        :key="i"
                        >                    
                        <v-radio
                            :label="type.toUpperCase()"
                            :value="type"
                            />
                    </v-flex>
                </v-radio-group>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: 'get started & explore this data portal',
            search: '',
            types: [
                'dataset',
                'research',
                'apps'
            ],
            typeSelect: 'dataset'
        }
    },
    computed: {
        titleUpper () {
            return this.title.toUpperCase();
        },
        showLabel() {
            let label;
            if (this.typeSelect === 'dataset') label = 'datasets';
            else if (this.typeSelect === 'research') label = 'research publications';
            else if (this.typeSelect === 'apps') label = 'applications';

            return label;
        }
    },
    methods: {
        onSubmit () {
            if (this.search === null) {
                this.search = '';
            }

            const nameSelect = `${this.typeSelect}Search`;
            this.$router.push({
                name: nameSelect,
                params: {
                    search: this.search
                }
            });
        },
    },
}
</script>