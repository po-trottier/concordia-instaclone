<template>
  <div>
    <app-profile-info />
    <app-profile-gallery />
  </div>
</template>

<script>
import ProfileInfo from '@/components/Profile/ProfileInfo.vue';
import ProfileGallery from '@/components/Profile/ProfileGallery.vue';

export default {
  name: 'User',
  components: {
    appProfileInfo: ProfileInfo,
    appProfileGallery: ProfileGallery,
  },
};
</script>
