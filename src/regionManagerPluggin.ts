import { App, Component, createVNode, Plugin } from "@vue/runtime-core";
import { render } from "@vue/runtime-dom";
import { REGION_PREFIX } from "./@types/constants";
import { RegionManager, RegionInfo } from "./@types/types";
import { regionNameDirective } from "./directives/regionNameDirective";
import { regionActivationDirective } from "./directives/regionActivationDirective";

const regions: {[regionName: string]: RegionInfo[]} = {};

const regionManager: RegionManager = {
    mount(regionName: string, component: Component, removeOldContent?: boolean): void {
        const regionHost = document.getElementsByClassName(`${REGION_PREFIX}${regionName}`);
        if (regionHost.length == 0)
        {
            console.log(`Unable to find region ${regionName}. ${component.name} was not mounted.`);
            return;
        }
        if (regionHost.length > 1) {
            console.warn(`Multiple regions registered with name: ${regionName}`);
        }

        const host = regionHost[0];
        const node = createVNode(component);
        render(node, host);
    }
}

export const regionManagerPlugin: Plugin = {
    install(app: App): void {
        app.config.globalProperties.$regionManager = regionManager;
        app.directive("region", regionNameDirective);
        app.directive("activation", regionActivationDirective);
    }
}
