import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { AISearchTrigger } from '@/components/search';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 2,
        // Use transform to add descriptions from meta.json
        tabs: {
          transform(option, node) {
            return {
              ...option,
              description: node.description ?? option.description,
            };
          },
        },
      }}
    >
      {children}
      <div className='fixed !right-0 w-[100px]'>
        <AISearchTrigger />
      </div>

    </DocsLayout>
  );
}