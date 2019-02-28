<template>
  <v-container>
    <v-layout justify-center row wrap>
      <v-flex xs12 class="text-xs-center uppercase">
        <h3>{{ title }}</h3>
        <v-icon>fa-caret-down</v-icon>
      </v-flex>

      <v-flex xs12 md9 xl6>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            @keyup.enter="submit"
            v-model="search"
            :label="`Search ${typeSelect} in Research Hub`"
            :clearable="true"
            append-outer-icon="search"
            solo
          />
        </v-form>

        <v-radio-group
          v-model="typeSelect"
          class="py-0 my-0 font-lato"
          style="justify-content: center;"
          row
        >
          <v-flex v-for="(type, i) in types" :key="i">
            <v-radio :label="type.toUpperCase()" :value="type" />
          </v-flex>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Get started & explore this Research Hub',
      search: '',
      types: ['apps', 'articles', 'datasets'],
      typeSelect: 'articles'
    }
  },
  methods: {
    onSubmit() {
      const nameSelectSearch = `${this.typeSelect.slice(0, -1)}Search`
      this.$router.push({
        name: nameSelectSearch,
        params: {
          search: this.search
        }
      })
    }
  }
}
</script>
