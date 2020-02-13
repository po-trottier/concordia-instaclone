<template>
  <div>
    <app-profile-info />
    <app-profile-gallery />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProfileInfo from '@/components/Profile/ProfileInfo.vue';
import ProfileGallery from '@/components/Profile/ProfileGallery.vue';

export default {
  name: 'User',

  computed: {
    uid() {
      return this.$route.params.uid;
    },
  },

  watch: {
    uid(val) {
      this.getProfile(val);
    },
  },

  methods: {
    ...mapActions('profile', ['getProfile']),
  },

  created() {
    this.getProfile(this.uid);
  },

  components: {
    appProfileInfo: ProfileInfo,
    appProfileGallery: ProfileGallery,
  },
};
</script>
