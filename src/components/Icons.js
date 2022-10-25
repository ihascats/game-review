import Icon from '@mdi/react';
import {
  mdiArrowLeft,
  mdiHome,
  mdiCloseCircle,
  mdiLoading,
  mdiBrightness4,
  mdiBrightness6,
  mdiAlphaTBoxOutline,
} from '@mdi/js';

export default function Icons() {
  const back = (
    <Icon
      path={mdiArrowLeft}
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const home = (
    <Icon
      path={mdiHome}
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const cancelSearch = (
    <Icon
      path={mdiCloseCircle}
      size={0.9}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const loading = (
    <Icon
      path={mdiLoading}
      size={1.5}
      horizontal
      vertical
      rotate={180}
      color="inherit"
      spin
    />
  );

  const dark = (
    <Icon
      path={mdiBrightness4}
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const light = (
    <Icon
      path={mdiBrightness6}
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const titles = (
    <Icon
      path={mdiAlphaTBoxOutline}
      size={1}
      horizontal
      vertical
      rotate={180}
      color="inherit"
    />
  );

  const icons = {
    back,
    home,
    cancelSearch,
    loading,
    dark,
    light,
    titles,
  };

  return icons;
}
