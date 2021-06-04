import { Component } from "@vue/runtime-core";

export interface RegionManager {
    mount(regionName: string, element: Component, removeOldContent?: boolean): void;
}

export interface RegionInfo {
    host: HTMLElement | Component,
    regionContents: Component[],
}
