import { Component, Host, h } from '@stencil/core';

// TODO when ready to deliver:
//  - remove "private" from component package.json and from components-ovh root package.json
//  - replace stories config in storybook/.storybook/main

/**
 * @slot (unnamed) - OvhLocationTile content
 */
@Component({
  shadow: true,
  styleUrl: 'osds-ovh-location-tile.scss',
  tag: 'osds-ovh-location-tile',
})
export class OsdsOvhLocationTile {
  render() {
    return (
      <Host>
        OVH Location Tile
      </Host>
    );
  }
}
