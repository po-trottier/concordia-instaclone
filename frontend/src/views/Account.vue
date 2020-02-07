<template>
  <div>
    <ProfileInfo />
    <ProfileGallery />
  </div>
</template>

<script>
import ProfileInfo from '@/components/Profile/ProfileInfo.vue';
import ProfileGallery from '@/components/Profile/ProfileGallery.vue';

export default ({
  name: 'Account',
  components: {
    ProfileInfo,
    ProfileGallery,
  },
});
</script>

<style lang="stylus" scoped>

</style>
