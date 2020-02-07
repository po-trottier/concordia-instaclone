<template>
  <v-container
    class="my-12">
    <v-layout row>
      <v-flex
        offset-sm1
        sm4>
        <div
          align="center">
          <v-avatar
            size="150">
            <v-img src="@/assets/account-placeholder.png" />
          </v-avatar>
        </div>
      </v-flex>
      <v-flex>
        <v-layout
          column>
          <v-flex>
            <span class="profile-user-name"> {{ username }}</span>
            <v-btn
              depressed="true"
              class="profile-edit-btn mb-2">
              <span>Edit Profile</span>
            </v-btn>
          </v-flex>
          <v-flex class="mt-2 mb-5">
            <span class="profile-stat-name">{{ postcount }}</span>
            <span class="profile-stat-count"> posts</span>
            <span class="profile-stat-name">{{ followercount }}</span>
            <span class="profile-stat-count"> followers</span>
            <span class="profile-stat-name">{{ followingcount }}</span>
            <span class="profile-stat-count"> following</span>
          </v-flex>
          <v-flex>
            <span class="profile-real-name">{{ realname }} </span>
          </v-flex>
          <v-flex>
            <span>{{ bio }} </span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default ({
  name: 'ProfileInfo',
  data() {
    return {

      displaypicture: '@/assets/picture.jpg',
      username: 'radleycarpio',
      postcount: '3',
      followercount: '300',
      followingcount: '300',
      realname: 'Radley Carpio',
      bio: 'This is the bio',
    };
  },
});

</script>

<style scoped>

  .profile-user-settings,
  .profile-stats,
  .profile-bio {
      float: left;
      width: calc(66.666% - 2rem);
  }

  .profile-user-name {
      font-size: 1.75rem;
      font-weight: 400;
  }

  .profile-edit-btn {
      font-family: "Arial Narrow";
      font-size: 0.70rem;
      border: 0.05rem solid #dbdbdb;
      border-radius: 0.3rem;
      margin-left: 2rem;
  }

  .profile-stats {
      font-size: 1rem;
  }

  .profile-bio {
      font-size: 1rem;
      font-weight: 400;
  }

  .profile-real-name,
  .profile-stat-name,
  .profile-edit-btn {
      font-weight: 600;
  }

  .profile-stat-count
  {
      white-space: pre;
      margin-right: 2.5rem;
      font-weight: 400;
  }

</style>
