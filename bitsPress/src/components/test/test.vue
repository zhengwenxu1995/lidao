<template>
  <div class="test-box">
    <el-button @click="addTab">Add components</el-button>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="(item, index) in editableTabs2" :key="index" :label="item.title" :name="item.name">
        <div :is='item.content'></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editableTabsValue2: '2',
      editableTabs2: [],
      tabIndex: 0
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + '';
      import('./test' + newTabName + '.vue').then(
        res => {
          console.log('res', res);
          this.editableTabs2.push({
            title: 'Test ' + this.tabIndex,
            name: newTabName,
            content: res.default
          });
          this.editableTabsValue2 = newTabName;
        }
      );
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      console.log(targetName);
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style scoped>

</style>
