import { OcdkSurfaceDefaultConfig } from './ocdk-surface-default-config';

const variables = {
  decelerationCurveTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
};

/**
 * css for the surface component to be encapsulated into a shadow dom.
 * It is dynamically generated depending some default config of the surface.
 */
const ocdkSurfaceCssTemplate = document.createElement('template');
ocdkSurfaceCssTemplate.innerHTML = `
<style>

:host {
    display: none;
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    text-align: initial; /* make RTL aligment works even if a text align is defined on a parent */

    margin: 0;
    padding: 0;
    transform-origin: left top;
    overflow: auto;
    will-change: transform, opacity;
    z-index: var(--ocdk-surface-z-index, 8);
    overscroll-behavior: contain;
}

:host([opened]) {
    display: inline-block;
}

/* DEFAULT ANIMATION (SCALING) */
:host([animated]:not([animation])),
:host([animated][animation=scaling i]) {
    opacity: 0;
    transform: scale(1);
    transition: opacity ` + `${OcdkSurfaceDefaultConfig.ANIMATIONS.SCALING.TRANSITION_FADE_IN_DURATION_CSS}` + ` linear,
        transform ` + `${OcdkSurfaceDefaultConfig.ANIMATIONS.SCALING.TRANSITION_OPEN_DURATION_CSS}` + ` ${variables.decelerationCurveTimingFunction}` + `,
        height 250ms ` + `${variables.decelerationCurveTimingFunction}` + ` 0s;
}

:host([animated]:not([animation]).ocdk-surface--animating-open),
:host([animated][animation=scaling i].ocdk-surface--animating-open),
:host([animated]:not([animation]).ocdk-surface--animating-closed),
:host([animated][animation=scaling i].ocdk-surface--animating-closed) {
    display: inline-block;
    opacity: 0;
}

:host([animated]:not([animation]).ocdk-surface--animating-open),
:host([animated][animation=scaling i].ocdk-surface--animating-open) {
    transform: scale(0.8);
}
:host([animated]:not([animation]).ocdk-surface--open),
:host([animated][animation=scaling i].ocdk-surface--open) {
    transform: scale(1);
    opacity: 1;
}
:host([animated]:not([animation]).ocdk-surface--animating-closed),
:host([animated][animation=scaling i].ocdk-surface--animating-closed) {
    transition: opacity ` + `${OcdkSurfaceDefaultConfig.ANIMATIONS.SCALING.TRANSITION_FADE_OUT_DURATION_CSS}` + ` linear;
}

/* SLIPPING ANIMATION */
:host([animated][animation=slipping i]) {
    opacity: 0;
    transform-style: preserve-3d;
    transform: translate3d(0px, -20%, 0px) rotateX(-90deg);
}

:host([animated][animation=slipping i].ocdk-surface--animating-open),
:host([animated][animation=slipping i].ocdk-surface--animating-closed){
    transition: all ` + `${OcdkSurfaceDefaultConfig.ANIMATIONS.SLIPPING.TRANSITION_OPEN_DURATION_CSS}` + ` ease;
    pointer-events: none;
    display: inline-block;
    opacity: 0;
}

:host([animated][animation=slipping i].ocdk-surface--open) {
    opacity: 1;
    transform: rotateX(0deg) translateZ(0px);
}
</style>
`;

export { ocdkSurfaceCssTemplate };
