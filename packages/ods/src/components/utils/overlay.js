import { arrow, autoUpdate, computePosition, flip, offset, shift } from "@floating-ui/dom";
var ODS_OVERLAY_POSITION;
(function (ODS_OVERLAY_POSITION) {
    ODS_OVERLAY_POSITION["bottom"] = "bottom";
    ODS_OVERLAY_POSITION["bottomEnd"] = "bottom-end";
    ODS_OVERLAY_POSITION["bottomStart"] = "bottom-start";
    ODS_OVERLAY_POSITION["left"] = "left";
    ODS_OVERLAY_POSITION["leftEnd"] = "left-end";
    ODS_OVERLAY_POSITION["leftStart"] = "left-start";
    ODS_OVERLAY_POSITION["right"] = "right";
    ODS_OVERLAY_POSITION["rightEnd"] = "right-end";
    ODS_OVERLAY_POSITION["rightStart"] = "right-start";
    ODS_OVERLAY_POSITION["top"] = "top";
    ODS_OVERLAY_POSITION["topEnd"] = "top-end";
    ODS_OVERLAY_POSITION["topStart"] = "top-start";
})(ODS_OVERLAY_POSITION || (ODS_OVERLAY_POSITION = {}));
const ODS_OVERLAY_POSITIONS = Object.freeze(Object.values(ODS_OVERLAY_POSITION));
function findTriggerElement(triggerId, shadowDomTriggerId) {
    var _a;
    const hostElement = document.querySelector(`#${triggerId}`);
    if (!hostElement) {
        console.warn(`[ods] Unable to find trigger element in DOM with id: ${triggerId}`);
        return;
    }
    if (shadowDomTriggerId) {
        const shadowDomElement = (_a = hostElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector(`#${shadowDomTriggerId}`);
        if (!shadowDomElement) {
            console.warn(`[ods] Unable to find trigger element in shadow DOM with id: ${shadowDomTriggerId}`);
            return;
        }
        return shadowDomElement;
    }
    return hostElement;
}
async function getElementPosition(position, domElement, option) {
    if (!domElement.trigger) {
        throw new Error('No trigger element passed, unable to compute the position');
    }
    const middlewares = [
        flip(),
        offset((option === null || option === void 0 ? void 0 : option.offset) || 0),
        shift(option === null || option === void 0 ? void 0 : option.shift),
    ];
    if (domElement.arrow) {
        middlewares.push(arrow({ element: domElement.arrow }));
    }
    return computePosition(domElement.trigger, domElement.popper, {
        middleware: middlewares,
        placement: position,
    });
}
function hideOverlay(popperElement, cleanUpCallback) {
    popperElement.style.display = 'none';
    if (cleanUpCallback) {
        cleanUpCallback();
    }
}
function showOverlay(position, domElement, option) {
    if (!domElement.trigger) {
        return () => { };
    }
    domElement.popper.style.display = 'block';
    return autoUpdate(domElement.trigger, domElement.popper, () => update(position, domElement, option));
}
async function update(position, domElement, option) {
    const { x, y, placement, middlewareData } = await getElementPosition(position, domElement, option);
    Object.assign(domElement.popper.style, {
        left: `${x}px`,
        top: `${y}px`,
    });
    if (!!domElement.arrow && middlewareData.arrow) {
        const arrowData = middlewareData.arrow;
        const staticSide = {
            bottom: 'top',
            left: 'right',
            right: 'left',
            top: 'bottom',
        }[placement.split('-')[0]] || '';
        Object.assign(domElement.arrow.style, {
            bottom: '',
            left: (arrowData === null || arrowData === void 0 ? void 0 : arrowData.x) ? `${arrowData.x}px` : '',
            right: '',
            top: (arrowData === null || arrowData === void 0 ? void 0 : arrowData.y) ? `${arrowData.y}px` : '',
            // eslint-disable-next-line sort-keys
            [staticSide]: '-4px', // half of arrow css width/height
        });
    }
}
export { findTriggerElement, getElementPosition, hideOverlay, ODS_OVERLAY_POSITION, ODS_OVERLAY_POSITIONS, showOverlay, };
