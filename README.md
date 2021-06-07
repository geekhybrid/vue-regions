# vue-regions
Provide a decoupled way of injecting contents into specific regions of the applications.

## Inspiration: 
So parent-child relationships can leverage slots which are great for most scenarios. However, it is not always possible to have parent-child relationships between components to leverage the power of `slots`. This library was inspired by a similar C# library `PRISM`. 

With `vue-regions` it is possible to inject any component into any named region within the application.

By using the `v-region` and specifying the `name` property component, you can mark that region to be available for component injection by any other component.

Parent Component
```js
<template>
    <v-region region="right-slider" />
    <router-view></router-view>
    <v-region region="left-slider" />
</template>

```

Some other component injecting into `right-slider` slot with javascript/typescript

### Vue 3: Example
```js
import { RegionNames } from './RegionNames.ts';
import DynmicComponent from '@/components/DynamicComponent.vue';
...

onInjectClick(): void {
    this.getInstance().config
        .globalProperties
        .$regionManager
        .mount(Regionnames.RIGHT_SLIDER, DynmicComponent);
}

```

### Vue 2: Example
```js
import { RegionNames } from './RegionNames.ts';
import DynmicComponent from '@/components/DynamicComponent.vue';
...

methods: {    
    onInjectClick(): void {
        this.$regionManager.mount(Regionnames.RIGHT_SLIDER, DynmicComponent);
    }
}

```

For best practices, the region names should be defined in a central static file.
In the example above they are defined in the `RegionNames` file.

```js
// RegionNames.ts

export const LEFT_OVERLAY_REGION = "Left_Overlay";
export const RIGHT_DYNAMIC_CONTENT = "Content_Region";

```

