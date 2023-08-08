import { OcdkLogger } from '../../logger/ocdk-logger';
import { OcdkSurfaceController } from './ocdk-surface-controller';
import { OcdkSurfaceAdapter } from './ocdk-surface-adapter';
import { ocdkSurfaceCssTemplate } from './ocdk-surface.css';
import { OcdkSurfaceAnimation } from './core/ocdk-surface-animation';
import { OcdkSurfaceDistance } from './core/ocdk-surface-distance';
import { OcdkSurfaceCorner } from './core/ocdk-surface-corner';
import { OcdkSurfaceCornerPoints } from './core/ocdk-surface-corner-points';
import { ocdkIsWindow } from '../../utils/window/ocdk-is-window';
import { OcdkSurfaceMaxDimensions } from './core/ocdk-surface-max-dimensions';
import { OcdkSurfaceStrategyDefiner } from './core/system/ocdk-surface-strategy-definer';
import { OcdkSurfaceStrategyDefinerConfig } from './core/system/ocdk-surface-strategy-definer-config';
import { ocdkGetCorrectPropertyName } from '../../utils/css/ocdk-get-correct-property-name';
import { OcdkSurfaceBehaviour } from './ocdk-surface-behaviour'


export class OcdkSurface extends HTMLElement implements OcdkSurfaceBehaviour {
  static totalIds = 0;
  adapter: OcdkSurfaceAdapter;
  private anchorElement!: Element | null;
  private readonly controller: OcdkSurfaceController;
  private readonly debug: boolean = false;
  private uniqueId = OcdkSurface.totalIds++;
  private logger = new OcdkLogger(`OcdkSurface #${this.uniqueId}`);

  constructor() {
    super();
    this.adapter = this.getDefaultAdapter();

    this.controller = new OcdkSurfaceController(this);
    this.logger.log('controller', this.controller);

    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.debug = this.hasAttribute('debug');

      this.shadowRoot.innerHTML = this.render();

      this.shadowRoot.appendChild(ocdkSurfaceCssTemplate.content.cloneNode(true));

      // Select the slot element from the ShadowDOM
      const slot = this.shadowRoot.querySelector('slot')
      if (slot) {
        slot.addEventListener('slotchange', (event) => {
          this.logger.log('slotchange');
          // Get the elements assigned to the slot...
          if (event.target) {
            const children = (event.target as any).assignedElements();
            this.logger.log('children', children);
          }
        });
      } else {
        throw 'no slot found';
      }
    }

  }

  static get observedAttributes(): string[] {
    return ['opened', 'animation', 'animated', 'corners'];
  }

  get animated(): boolean {
    return this.hasAttribute('animated');
  }

  /**
   * the surface appears with an animation by default.
   * If you want to disable animation, you must set to `false` via the property way
   * like `mySurface.animated = false`
   * or `.animated={false}` (lit-html)
   * @param animated - have to animated or not
   */
  set animated(animated: boolean) {
    this.processAnimated(animated, true);
  }

  get animation(): OcdkSurfaceAnimation | 'none' {
    if (this.controller.animated) {
      return this.getAttribute('animation') as (OcdkSurfaceAnimation | null) || this.controller.getAnimation();
    } else {
      return 'none';
    }
  }

  /**
   * Set the animation of the surface.
   * You can set `none` if you don't want animation.
   * You can set `undefined` to reset the default animation.
   * @param name - name of the wanted animation
   */
  set animation(name: OcdkSurfaceAnimation | 'none' | undefined) {
    this.processAnimation(name, true);
  }

  get corners(): [OcdkSurfaceCorner, OcdkSurfaceCorner] {
    const points = this.controller.getCornerPoints();
    return [points.anchor, points.origin];
  }

  /**
   * property to set the corner references for the `anchor` and the `surface`
   * @param corners - tuple of corner references (anchor, origin)
   */
  set corners(corners: [OcdkSurfaceCorner, OcdkSurfaceCorner]) {
    this.controller.setCornerPoints({ anchor: corners[ 0 ], origin: corners[ 1 ] });
  }

  get opened(): boolean {
    return this.hasAttribute('opened');
  }

  /**
   * update internal value of opened (via web component)
   * @param opened - is opened or not
   */
  set opened(opened: boolean) {
    if (opened) {
      this.setAttribute('opened', '');
      this.controller.open();
    } else {
      this.removeAttribute('opened');
      this.controller.close();
    }
  }

  /**
   * update once the attribute in DOM is changed
   * @param name - name of the attribute to check
   * @param oldValue - previous value
   * @param newValue - current value
   */
  attributeChangedCallback(name: any, _oldValue: any, newValue: any | null) {
    switch (name) {
      case 'animation':
        this.processAnimation(newValue);
        break;
      case 'animated':
        this.processAnimated(newValue === '');
        break;
      case 'opened':
        if (this.opened) {
          this.controller.open();
        } else {
          this.controller.open();
        }
        break;
    }
  }

  /**
   * Hide the `surface` overlay.
   */
  close() {
    this.opened = false;
  }

  connectedCallback() {
    this.logger.log('[connectedCallback]', this);

    if (!this.anchorElement) {
      const parentEl = this.shadowRoot?.host;
      this.anchorElement = parentEl ? parentEl : null;
      this.logger.log('[connectedCallback]', 'set anchor', { anchorElement: this.anchorElement });
    }


    this.animated = this.animation.toLowerCase() === 'none' ? false : true;
    this.animation = this.animation.toLowerCase() as OcdkSurfaceAnimation;
  }

  disconnectedCallback() {
    this.logger.log('disconnected from the DOM');
    this.controller.onDestroy();
  }

  /**
   * Display the `surface` overlay and display it with the selected position strategy.
   */
  open(): void {
    this.opened = true;
  }

  /**
   * Set the `anchor` corner `reference` that corresponds to the `trigger` element.
   * @param anchorCorner - corner to set
   */
  setAnchorCorner(anchorCorner: OcdkSurfaceCorner): void {
    this.controller.setAnchorCorner(anchorCorner);
  }

  /**
   * Set up the surface with an `anchor` element.
   * The position will be computed depending the position of the element in the page.
   * @param element - html element to set as the anchor
   */
  setAnchorElement(element: Element): void {
    this.anchorElement = element;
  }

  /**
   * Set the margin around the `anchor`.
   * The overlay will be displayed at a distance that corresponds to these margins.
   * @param margin - margins to set
   */
  setAnchorMargin(margin: Partial<OcdkSurfaceDistance>): void {
    this.controller.setAnchorMargin(margin);
  }

  /**
   * Equivalent of the `corners` property.
   * Set the `corner references` for the `anchor` and the `surface`.
   * @param cornerPoints - corners references
   */
  setCornerPoints(cornerPoints: Partial<OcdkSurfaceCornerPoints>): void {
    this.controller.setCornerPoints(cornerPoints);
  }

  /**
   * Set your own position strategy.
   * When you define a custom strategy, you must use `OcdkSurfaceStrategyDefiner`.
   * You have to define a config and the different positions with all the inspectors and appliers.
   * @see OcdkSurfaceCustomStrategyExample
   * @param strategy - your strategy
   */
  setCustomStrategy<StrategyConfig extends OcdkSurfaceStrategyDefinerConfig>(strategy: OcdkSurfaceStrategyDefiner<StrategyConfig>): void {
    this.controller.setCustomStrategy(strategy);
  }

  /**
   * Set the `surface` corner reference.
   * @param originCorner - corner reference
   */
  setOriginCorner(originCorner: OcdkSurfaceCorner): void {
    this.controller.setOriginCorner(originCorner);
  }

  /**
   * Check if a click is outside of the surface
   * @param event - event reference
   */
  isClickOutsideSurface(event: Event): boolean {
    const srcElement = event.composedPath()[0];
    return this.anchorElement?.contains(event.target as Node) || this.anchorElement?.shadowRoot?.contains(srcElement as Node) || false;
  }

  private getDefaultAdapter() {
    const adapter: OcdkSurfaceAdapter = {
      addClass: (className) => this.classList.add(className),
      removeClass: (className) => this.classList.remove(className),
      hasClass: (className) => this.classList.contains(className),
      hasAnchor: () => !!this.anchorElement,
      isElementInContainer: (el) => this.contains(el) || !!el.shadowRoot?.contains(this),
      isRtl: () =>
        getComputedStyle(this).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        const propertyName =
          `${ocdkGetCorrectPropertyName(window, 'transform')}-origin`;
        this.logger.log('[getDefaultAdapter].setTransformOrigin', { propertyName, origin });
        this.style.setProperty(propertyName, origin);
      },
      isFocused: () => document.activeElement === this,
      getInnerDimensions: () => {
        const dimensions = {
          width: this.offsetWidth,
          height: this.offsetHeight
        };
        this.logger.log('[getDefaultAdapter].getInnerDimensions', { dimensions });
        return dimensions;
      },
      getMaxDimensions: () => {
        const dimensions: OcdkSurfaceMaxDimensions = {
          maxWidth: null,
          maxHeight: null
        };
        if (ocdkIsWindow(window)) {
          const computed = window.getComputedStyle(this);
          const maxHeight = parseInt(computed.maxHeight);
          const maxWidth = parseInt(computed.maxWidth);
          dimensions.maxHeight = isNaN(maxHeight) ? dimensions.maxHeight : maxHeight;
          dimensions.maxWidth = isNaN(maxWidth) ? dimensions.maxWidth : maxWidth;
        }
        this.logger.log('[getDefaultAdapter].getMaxDimensions', { dimensions });
        return dimensions;
      },
      getAnchorDimensions: () => this.anchorElement ?
        this.anchorElement.getBoundingClientRect() :
        null,
      getWindowDimensions: () => {
        return { width: window.innerWidth, height: window.innerHeight };
      },
      getBodyDimensions: () => {
        return { width: document.body.clientWidth, height: document.body.clientHeight };
      },
      getWindowScroll: () => {
        return { x: window.pageXOffset, y: window.pageYOffset };
      },
      setPosition: (position) => {
        this.style.left = 'left' in position ? `${position.left}px` : '';
        this.style.right = 'right' in position ? `${position.right}px` : '';
        this.style.top = 'top' in position ? `${position.top}px` : '';
        this.style.bottom = 'bottom' in position ? `${position.bottom}px` : '';
      },
      cleanUpStyles: () => {
        const propertyName =
          `${ocdkGetCorrectPropertyName(window, 'transform')}-origin`;
        this.logger.log('[getDefaultAdapter].cleanUpStyles', { propertyName });
        this.style.removeProperty(propertyName);
        this.style.removeProperty('left');
        this.style.removeProperty('right');
        this.style.removeProperty('top');
        this.style.removeProperty('bottom');
        this.style.removeProperty('max-height');
        this.style.removeProperty('min-height');
      },
      setMaxHeight: (height) => {
        this.style.maxHeight = height;
      },
      setMinHeight: (height) => {
        this.style.minHeight = height;
      },
      setMaxWidth: (width) => {
        this.style.maxWidth = width;
      },
      setMinWidth: (width) => {
        this.style.minWidth = width;
      },
      autoDetectItemHeight: () => {
        const elements = this.querySelector('slot')?.assignedElements();
        const firstElement = elements && elements[ 0 ] as HTMLElement | undefined;
        const height = firstElement ? firstElement.offsetHeight : 0;
        this.logger.log('[getDefaultAdapter].autoDetectItemHeight', { height });
        return height;
      },
      autoDetectItemWidth: () => {
        const elements = this.querySelector('slot')?.assignedElements();
        const firstElement = elements && elements[ 0 ] as HTMLElement | undefined;
        const width = firstElement ? firstElement.offsetWidth : 0;
        this.logger.log('[getDefaultAdapter].autoDetectItemWidth', { width });
        return width;
      }
    };
    return adapter;
  }

  private processAnimated(animated: boolean, reflect = false) {
    if (animated) {
      reflect && this.setAttribute('animated', '');
      this.controller.animated = true;
    } else {
      reflect && this.removeAttribute('animated');
      this.controller.animated = false;
    }
  }

  private processAnimation(name: OcdkSurfaceAnimation | 'none' | undefined, reflect = false) {
    if (name === 'none') {
      this.animated = false;
      reflect && this.removeAttribute('animation');
    } else {
      this.controller.setAnimation(name);
      if (reflect) {
        const animation = this.controller.getAnimation();
        if (animation) {
          this.setAttribute('animation', animation.toLowerCase());
        } else {
          this.removeAttribute('animation');
        }
      }
    }
  }

  private render(): string {
    this.logger.log('render');
    const debugHTML = this.debug ? `<div style="font-size: 0.75rem; color: #bbbbbb">OcdkSurface #${this.uniqueId}</div>` : '';
    return `${debugHTML}<slot></slot>`;
  }

}

