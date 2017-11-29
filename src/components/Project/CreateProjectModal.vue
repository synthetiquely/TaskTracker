<template lang="html">
  <transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            <h3>Create new project</h3>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            <form class="ui form">
              <div class="field required">
                <label for="title">Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter project title"
                  v-model="title"
                >
              </div>
              <div class="field required">
                <label for="description">Description</label>
                <textarea
                  rows="2"
                  name="description"
                  id="description"
                  placeholder="Enter project description"
                  v-model="description"
                ></textarea>
              </div>
              <div class="field required">
                <label for="imageUrl">Image</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Enter image url here (400x400)"
                  v-model="imageUrl"
                >
              </div>
            </form>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="ui positive button modal-default-button"
              :disabled="!canBeSubmited"
              type="submit"
              @click="submit"
            >
              Create
            </button>
            <button class="ui button modal-default-button" @click="$emit('close')">
              Cancel
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      imageUrl: '',
      errors: {},
    };
  },
  computed: {
    canBeSubmited() {
      if (this.title === '' || this.description === '' || this.imageUrl === '') {
        return false;
      }
      return true;
    },
  },
  methods: {
    submit() {
      this.$store.dispatch('createNewProject', {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
      });
      this.$emit('close');
    },
  },
};
</script>

<style lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-footer::after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
