<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types'
import Collapse from './components/Collapse/Collapse.vue'
import Item from './components/Collapse/CollapseItem.vue'
import Icon from './components/Icon/Icon.vue'

const buttonRef = ref<ButtonInstance | null>(null)

const openedValue = ref([])

onMounted(() => {
  console.log('buttonRef', buttonRef.value?.ref)
})
</script>

<template>
  <div>
    <Icon type="success" icon="fa-solid fa-house" spin />
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
  </div>
  <Collapse v-model="openedValue" accordion>
    <Item name="a" title="Title A">
      <h1>headline title</h1>
      <div>this is content a aaa</div>
    </Item>
    <Item name="b" title="Title B">
      <div>this is bbbbb test</div>
    </Item>
    <Item name="c" title="Disabled Title" disabled>
      <div>this is cccc test</div>
    </Item>
  </Collapse>
</template>

<style scoped></style>
