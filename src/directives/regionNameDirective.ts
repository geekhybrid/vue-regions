import { REGION_PREFIX } from "@/@types/constants";
import { Directive, DirectiveBinding } from "@vue/runtime-core";

export const regionNameDirective: Directive = {
    beforeMount(el: HTMLElement, binding: DirectiveBinding) {
        el.classList.add(`${REGION_PREFIX}${binding.value}`);
    }
}