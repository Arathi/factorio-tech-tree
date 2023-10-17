<script setup lang="ts">
import { ComputedRef, computed } from 'vue';
import Technology, {
  Icon as TechnologyIcon
} from '../domains/Technology';
import { useTechnologyStore } from '../stores/TechnologyStore';

const FactorioAssetsBaseURL = "http://127.0.0.1:11007";
const store = useTechnologyStore();

interface Props {
  technologyId: string;
}

const props = defineProps<Props>();

const technology: ComputedRef<Technology> = computed(() => {
  const tech = store.datas.get(props.technologyId);
  if (tech != undefined) {
    return tech;
  }
  return {} as Technology;
});

function getIconURL(icon: TechnologyIcon): string {
  let uri = icon.icon;
  uri = uri.replace("__core__", "core");
  uri = uri.replace("__base__", "base");
  return `${FactorioAssetsBaseURL}/${uri}`;
}

function getIconStyle(icon: TechnologyIcon): string {
  let styles: string[] = [];
  styles.push(`clip: rect(0, ${icon.icon_size}px, ${icon.icon_size}px, 0)`);
  styles.push(`width: ${icon.icon_size}px`)
  styles.push(`height: ${icon.icon_size}px`)

  if (icon.shift != undefined) {
    let top = 256 - icon.shift[0];
    let left = 256 - icon.shift[1];
    styles.push(`top: ${top}px`);
    styles.push(`left: ${left}px`);
  }

  return styles.join(";");
}

</script>

<template>
  <div class="technology-icon">
    <div class="icons">
      <template v-for="icon in technology?.icons">
        <div 
          class="icon" 
          :style="getIconStyle(icon)"
        >
          <img
            :src="getIconURL(icon)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.icons {
  position: relative;
  width: 256px;
  height: 256px;
}

.icon {
  position: absolute;
}
</style>
