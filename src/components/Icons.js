import Icon from '@mdi/react';
import { mdiArrowLeft, mdiHome, mdiCloseCircle, mdiLoading } from '@mdi/js';

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

  const icons = {
    back,
    home,
    cancelSearch,
    loading,
  };

  return icons;
}
