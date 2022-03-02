/* eslint-disable ember/no-classic-components, ember/require-tagless-components */
/**
 * @module ember-paper
 */
import Component from '@ember/component';

import layout from '../templates/components/paper-card-title-media';

/**
 * @class PaperCardTitleMedia
 * @extends Ember.Component
 */
export default Component.extend({
  layout,
  tagName: 'md-card-title-media',
  size: 'md'
});
