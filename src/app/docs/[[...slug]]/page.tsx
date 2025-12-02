import { getPageImage, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getGithubLastEdit } from 'fumadocs-core/content/github';
import { Feedback } from '@/components/feedback';
import { saveFeedback } from '@/lib/feedback';
import { headers } from 'next/headers';
export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const time = await getGithubLastEdit({
    owner: 'vidhyagopinadh',
    repo: 'fuma-docs-spry',
    path: `content/docs/${page.path}`,
  });

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}
      lastUpdate={time ? new Date(time) : new Date()}
      footer={{
        enabled: true, // Enable footer with feedback
      }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        {/* Add feedback at the bottom */}
        <Feedback
          onRateAction={async (url, feedback) => {
            'use server';

            try {
              const headersList = await headers();
              const userAgent = headersList.get('user-agent') || undefined;
              const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
                || headersList.get('x-real-ip')
                || headersList.get('cf-connecting-ip')  // Cloudflare
                || undefined;

              saveFeedback(url, {
                opinion: feedback.opinion,
                message: feedback.message,
                sessionId: feedback.sessionId,
                metadata: {
                  userAgent,
                  ip,
                  ...feedback.clientMetadata,
                },
              });
              console.log('Feedback saved:', { url, feedback });

              return {};
            } catch (error) {
              console.error('Error saving feedback:', error);
              return {};
            }
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
