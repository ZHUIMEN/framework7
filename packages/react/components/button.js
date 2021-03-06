import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import F7Icon from './icon';
import __reactComponentDispatchEvent from '../runtime-helpers/react-component-dispatch-event.js';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';

class F7Button extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  onClick(event) {
    this.dispatchEvent('click', event);
  }

  get attrs() {
    const self = this;
    const props = self.props;
    const {
      href,
      target,
      tabLink
    } = props;
    let hrefComputed = href;
    if (href === true) hrefComputed = '#';
    if (href === false) hrefComputed = undefined;
    return Utils.extend({
      href: hrefComputed,
      target,
      'data-tab': Utils.isStringProp(tabLink) && tabLink || undefined
    }, Mixins.linkRouterAttrs(props), Mixins.linkActionsAttrs(props));
  }

  get classes() {
    const self = this;
    const props = self.props;
    const {
      noFastclick,
      noFastClick,
      tabLink,
      tabLinkActive,
      round,
      roundIos,
      roundMd,
      fill,
      fillIos,
      fillMd,
      big,
      bigIos,
      bigMd,
      small,
      smallIos,
      smallMd,
      raised,
      active,
      outline,
      disabled,
      className
    } = props;
    return Utils.classNames(className, 'button', {
      'tab-link': tabLink || tabLink === '',
      'tab-link-active': tabLinkActive,
      'no-fastclick': noFastclick || noFastClick,
      'button-round': round,
      'button-round-ios': roundIos,
      'button-round-md': roundMd,
      'button-fill': fill,
      'button-fill-ios': fillIos,
      'button-fill-md': fillMd,
      'button-big': big,
      'button-big-ios': bigIos,
      'button-big-md': bigMd,
      'button-small': small,
      'button-small-ios': smallIos,
      'button-small-md': smallMd,
      'button-raised': raised,
      'button-active': active,
      'button-outline': outline,
      disabled
    }, Mixins.colorClasses(props), Mixins.linkRouterClasses(props), Mixins.linkActionsClasses(props));
  }

  render() {
    const self = this;
    let iconEl;
    let textEl;
    const props = self.props;
    const {
      text,
      icon,
      iconMaterial,
      iconIon,
      iconFa,
      iconF7,
      iconIfMd,
      iconIfIos,
      iconMd,
      iconIos,
      iconColor,
      iconSize,
      id,
      style
    } = props;

    if (text) {
      textEl = React.createElement('span', null, text);
    }

    const mdThemeIcon = iconIfMd || iconMd;
    const iosThemeIcon = iconIfIos || iconIos;

    if (icon || iconMaterial || iconIon || iconFa || iconF7 || mdThemeIcon || iosThemeIcon) {
      iconEl = React.createElement(F7Icon, {
        material: iconMaterial,
        ion: iconIon,
        fa: iconFa,
        f7: iconF7,
        icon: icon,
        md: mdThemeIcon,
        ios: iosThemeIcon,
        color: iconColor,
        size: iconSize
      });
    }

    return React.createElement('a', Object.assign({
      id: id,
      style: style,
      className: self.classes,
      onClick: self.onClick.bind(self)
    }, self.attrs), iconEl, textEl, this.slots['default']);
  }

  get slots() {
    return __reactComponentSlots(this.props);
  }

  dispatchEvent(events, ...args) {
    return __reactComponentDispatchEvent(this, events, ...args);
  }

}

__reactComponentSetProps(F7Button, Object.assign({
  id: [String, Number],
  noFastclick: Boolean,
  noFastClick: Boolean,
  text: String,
  tabLink: [Boolean, String],
  tabLinkActive: Boolean,
  href: {
    type: [String, Boolean],
    default: '#'
  },
  round: Boolean,
  roundMd: Boolean,
  roundIos: Boolean,
  fill: Boolean,
  fillMd: Boolean,
  fillIos: Boolean,
  big: Boolean,
  bigMd: Boolean,
  bigIos: Boolean,
  small: Boolean,
  smallMd: Boolean,
  smallIos: Boolean,
  raised: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean
}, Mixins.colorProps, Mixins.linkIconProps, Mixins.linkRouterProps, Mixins.linkActionsProps));

export default F7Button;