import { useTranslation } from '@/app/i18next/client';

import Navbar from '.';

export default {
  title: 'temlates/Navbar',
  component: Navbar,
};

export function Default() {
  const { t } = useTranslation();
  return <Navbar t={t} />;
}
