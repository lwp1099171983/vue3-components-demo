<template>
  <div class="vk-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { CollapseProps, NameType, CollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'VkCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal
  }
)
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one active item')
}

const handleItemClick = (name: NameType) => {
  // const _activeNames = [...activeNames.value]
  if (props.accordion) {
    // 手风琴
    activeNames.value = [activeNames.value[0] === name ? '' : name]
  } else {
    const index = activeNames.value.indexOf(name)
    if (index > -1) {
      activeNames.value.splice(index, 1)
    } else {
      activeNames.value.push(name)
    }
  }

  // 更新数据
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>

<style scoped></style>
