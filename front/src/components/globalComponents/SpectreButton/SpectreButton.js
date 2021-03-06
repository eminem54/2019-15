import React from 'react';
import PropTypes from 'prop-types';
import { faSync, faBan } from '@fortawesome/free-solid-svg-icons';
import {
  BanIconStyle,
  SpectreButtonStyle,
  SyncIconStyle,
} from './SpectreButton.style';

SpectreButton.propTypes = {
  height: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

SpectreButton.defaultProps = {
  height: '2rem',
  onClick: null,
  children: null,
  active: false,
  loading: false,
  disabled: false,
};

export default function SpectreButton({
  height,
  onClick,
  children,
  active,
  loading,
  disabled,
}) {
  let icon;
  if (disabled) {
    icon = <BanIconStyle icon={faBan} size="1x" />;
  } else if (loading) {
    icon = <SyncIconStyle icon={faSync} spin size="1x" />;
  } else {
    icon = children;
  }
  return (
    <SpectreButtonStyle
      style={{ height }}
      disabled={disabled}
      onClick={onClick}
      active={active}
    >
      <span style={{ width: '1rem' }}>{icon}</span>
    </SpectreButtonStyle>
  );
}
