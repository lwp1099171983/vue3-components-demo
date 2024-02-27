<template>
  <i class="vk-icon" v-bind="$attrs" :style="customStyles" :class="{ [`vk-icon--${type}`]: type }">
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { IconProps } from './types'
import { omit } from 'lodash-es'
import { computed } from 'vue'
defineOptions({
  name: 'VkIcon',
  inheritAttrs: false
})
const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => (props.color ? { color: props.color } : {}))
</script>

<style scoped></style>
