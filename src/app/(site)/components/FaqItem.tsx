'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

function FaqItem({
  item,
}: React.PropsWithChildren<{
  item: {
    question: string;
    answer: string;
  };
}>) {
  return (
    <details
      className={
        'group border-b border-neutral-100 px-2 py-4 dark:border-dark-800'
      }
    >
      <summary
        className={'flex items-center justify-between hover:cursor-pointer'}
      >
        <h2
          className={
            'font-sans text-lg font-medium text-neutral-700' +
            ' hover:underline-none cursor-pointer dark:text-neutral-300' +
            ' dark:hover:text-white'
          }
        >
          {item.question}
        </h2>

        <div>
          <ChevronDownIcon
            className={'h-5 transition duration-300 group-open:-rotate-180'}
          />
        </div>
      </summary>

      <div
        className={
          'flex flex-col space-y-2 py-1 text-neutral-500 dark:text-neutral-400'
        }
        dangerouslySetInnerHTML={{ __html: item.answer }}
      />
    </details>
  );
}

export default FaqItem;
