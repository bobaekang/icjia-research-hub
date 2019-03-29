<template>
  <div>
    <BaseViewTitle :home="false">
      <h1>{{ title }}</h1>
    </BaseViewTitle>

    <AboutSection :title="section1.title" :subNum="3">
      <template v-slot:subtitle1>{{ section1.sub1.title }}</template>
      <template v-slot:subbody1>
        <p v-html="section1.sub1.p1"></p>
        <p v-html="section1.sub1.p2"></p>
      </template>

      <template v-slot:subtitle2>{{ section1.sub2.title }}</template>
      <template v-slot:subbody2>
        <p v-html="section1.sub2.p1"></p>
        <p v-html="section1.sub2.p2"></p>
      </template>

      <template v-slot:subtitle3>{{ section1.sub3.title }}</template>
      <template v-slot:subbody3>
        <p v-html="section1.sub3.p1"></p>
        <p v-html="section1.sub3.p2"></p>
      </template>
    </AboutSection>

    <AboutSection :title="section2.title">
      <p v-html="section2.p1"></p>
      <p v-html="section2.p2"></p>
      <p v-html="section2.p3"></p>
      <p v-html="section2.p4"></p>
    </AboutSection>

    <AboutSection :title="section3.title">
      <p v-html="section3.p1"></p>
      <p v-html="section3.p2"></p>
      <p v-html="section3.p3"></p>
    </AboutSection>

    <div class="spacer"></div>
  </div>
</template>

<script>
import AboutSection from '@/components/AboutSection'
import BaseViewTitle from '@/components/BaseViewTitle'

export default {
  name: 'about',
  components: {
    AboutSection,
    BaseViewTitle
  },
  data() {
    return {
      title: 'About',
      linkIconHtml:
        '<i aria-hidden="true" class="v-icon material-icons theme--light">open_in_new</i>',
      lorem30:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus commodi iste nihil assumenda quasi repudiandae nemo repellat, autem quis nulla pariatur sit, tempora dolorum facere vero sed illum consequuntur voluptas.'
    }
  },
  computed: {
    section1() {
      return {
        title: 'ICJIA Research Hub',
        sub1: {
          title: 'Open data, open research, open government',
          p1: 'Explain the goals and purposes of the Research Hub here.',
          p2: this.lorem30
        },
        sub2: {
          title: 'Open source technology',
          p1:
            'The Research Hub is developed publicly on <a href="#"> GitHub' +
            this.linkIconHtml +
            '</a> with XXX license.',
          p2:
            'It is also powered by popular open source projects, including: <ul>' +
            '<li><a href="https://vuejs.org/">Vue.js' +
            this.linkIconHtml +
            '</a> and <a href="https://vuetifyjs.com/">Vuetify' +
            this.linkIconHtml +
            '</a> for user interface;</li>' +
            '<li><a href="https://vuepress.vuejs.org/">VuePress' +
            this.linkIconHtml +
            '</a> for documentation;</li>' +
            '<li><a href="https://strapi.io/">Strapi' +
            this.linkIconHtml +
            '</a> for headless contenet management system;</li>' +
            '<li><a href="https://www.docker.com/">Docker' +
            this.linkIconHtml +
            '</a> for for containerization;</li>' +
            '<li>and many more.</li>'
        },
        sub3: {
          title: 'Need your help',
          p1: 'Explain how to provide feedback and contribution.',
          p2: this.lorem30
        }
      }
    },
    section2() {
      return {
        title: 'Illinois Criminal Justice Information Authority',
        p1:
          'Created in 1983, the Illinois Criminal Justice Information Authority (ICJIA) is a state agency dedicated to improving the administration of criminal justice.',
        p2:
          `ICJIA brings together key leaders from the justice system and the public to identify critical issues facing the criminal justice system in Illinois, and to propose and evaluate policies, programs, and legislation that address those issues. The agency also works to ensure the criminal justice system in Illinois is efficient and effective. ICJIA’s specific powers and duties are detailed in the Illinois Criminal Justice Information Act [ <a href="http://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=397&ChapterID=5">20 ILCS 3930 et. seq.` +
          this.linkIconHtml +
          '</a> ].',
        p3:
          'The statutory responsibilities of ICJIA fall under the categories of grants administration, research and analysis, policy and planning, and information systems and technology.',
        p4:
          'For more information about ICJIA, please visit <a href="http://www.icjia.state.il.us"> the official website' +
          this.linkIconHtml +
          '</a>.'
      }
    },
    section3() {
      return {
        title: 'Illinois Open Data Portal',
        p1:
          'The State of Illinois offers a state-wide open data portal, which lets you find data across state, facts about your state, create maps and graphs, and freely download the data for your own analysis. Many of these datasets are updated daily, and some even more often.',
        p2:
          "On March 10, 2014, the Illinois General Assembly unanimously passed PA 98-0627, a bill introduced by the Governor's Office and intended to increase transparency, accountability and savings in government by establishing a new State Open Operating Standard.",
        p3:
          'For more information, please visit <a href="https://data.illinois.gov/"> Illinois Open Data Portal' +
          this.linkIconHtml +
          '</a>.'
      }
    }
  }
}
</script>

<style scoped>
.spacer {
  height: 100px;
}
</style>
