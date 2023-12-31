import Image from 'next/image';

function LoadingComponentsGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-10 py-6 justify-center mt-40 xl:mt-20">
      {Array.from(Array(4).keys()).map((_, index) => (
        <GridItem key={index} />
      ))}
    </div>
  );
}

export default LoadingComponentsGrid;

function GridItem() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-neutral-900">
      <div className="m-2.5 rounded-2xl bg-neutral-300 dark:bg-neutral-700 lg:mx-3 lg:my-3.5 animate-pulse">
        <div className="flex items-center justify-center px-6">
          <div className="flex w-full justify-center bg-neutral-200 dark:bg-neutral-500 py-10">
            <Image
              priority
              src="/assets/images/placeholder-image.webp"
              alt="Placeholder"
              width={400}
              height={200}
              className="animate-pulse w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6 sm:pb-8 sm:pt-4 ">
        <h3 className="text-lg font-semibold animate-pulse">Component Name</h3>

        <div className="mt-4 flex items-center space-x-2">
          <div className="group flex-1 animate-pulse">
            <div className="flex items-center justify-center gap-2 rounded-md bg-transparent py-3.5 text-center text-base font-semibold text-neutral-600 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 group-hover:text-neutral-800 group-hover:ring-neutral-800 dark:text-neutral-400 dark:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:ring-neutral-100 dark:group-hover:text-white">
              <CodeIcon className="h-6 w-6" />
              Code
            </div>
          </div>

          <div className="group animate-pulse">
            <div className="rounded-md bg-transparent p-3 text-sm font-semibold shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 group-hover:ring-neutral-800 dark:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:ring-neutral-100">
              <PreviewLinkIcon className="h-6 w-6 text-neutral-600 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-white" />
            </div>
          </div>

          <div className="group animate-pulse">
            <div className="rounded-md bg-transparent p-3 text-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-50 group-hover:ring-neutral-800 dark:ring-neutral-400 dark:hover:bg-neutral-800 dark:hover:ring-neutral-100">
              <SaveIcon className="h-6 w-6 text-neutral-600 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function SaveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
      />
    </svg>
  );
}
