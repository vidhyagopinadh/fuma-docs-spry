import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Sprymd Logo" width={32} height={32} className="rounded" />
          <span>Sprymd Docs</span>
        </div>
      ),
    },
  };
}
