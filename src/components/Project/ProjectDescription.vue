<template>
  <div>
    <h4 class="ui horizontal divider header">
      <i class="info icon"></i>
      Description
    </h4>
    <div class="project-description">
        <div class="pink card" @click="seeDetails">
          <div class="image">
            <img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="avatar">
          </div>
          <div class="content">
          </div>
        </div>
          <div class="description">
            <h2 class="ui header">
              <div class="content">
                Project Title
              </div>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae sint suscipit non perferendis quibusdam est numquam. Placeat, enim animi!</p>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.project-description {
  display: flex;
  flex-direction: row;
}
.description {
  margin-left: 20px;
}
img {
  max-width: 200px;
  max-height: 200px;
}
</style>
