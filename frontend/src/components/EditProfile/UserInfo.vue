<template>
  <div class="px-6">
    <v-row
      no-gutters
      class="mb-4">
      <v-col
        cols="12"
        sm="3"
        md="2" />
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-row
          no-gutters
          align="center">
          <v-avatar size="64">
            <v-img :src="image" />
          </v-avatar>
          <v-col class="pl-5">
            <span style="font-weight: 400; font-size: 1.3rem;">
              {{ user.username }}
            </span>
            <app-change-dp />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <app-edit-form />
  </div>
</template>

<script >
import { mapGetters } from 'vuex';
import EditForm from './EditForm.vue';
import ChangeDP from './ChangeDP.vue';
import placeholder from '@/assets/account-placeholder.png';

export default ({
  name: 'UserInfo',

  data() {
    return {
      image: placeholder,
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),

    imageUrl() {
      return this.user.picture;
    },
  },

  watch: {
    imageUrl() {
      this.getImage();
    },
  },

  methods: {
    getImage() {
      if (!this.user.picture) {
        this.image = placeholder;
        return;
      }
      const storage = this.$firebase.storage();
      const imageRef = storage.refFromURL(this.user.picture);
      imageRef.getDownloadURL()
        .then((url) => {
          this.image = url;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  created() {
    this.getImage();
  },

  components: {
    appEditForm: EditForm,
    appChangeDp: ChangeDP,
  },
});
</script>
