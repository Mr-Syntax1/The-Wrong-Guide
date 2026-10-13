export default function NewsArticleSkeleton() {
  return (
    <div className="container-custom py-20 md:py-28 animate-pulse">
      {/* Back button */}
      <div className="h-10 w-32 bg-bg-tertiary rounded-base mb-8" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="h-6 w-24 bg-bg-tertiary rounded-full mx-auto mb-6" />
        <div className="h-12 w-3/4 bg-bg-tertiary rounded mx-auto mb-4" />
        <div className="h-12 w-1/2 bg-bg-tertiary rounded mx-auto mb-6" />
        <div className="h-4 w-32 bg-bg-tertiary rounded mx-auto" />
      </div>

      {/* Featured Image */}
      <div className="max-w-3xl mx-auto">
        <div className="aspect-video bg-bg-tertiary rounded-base mb-12" />

        {/* Content */}
        <div className="space-y-4">
          <div className="h-6 w-full bg-bg-tertiary rounded" />
          <div className="h-4 w-full bg-bg-tertiary rounded" />
          <div className="h-4 w-full bg-bg-tertiary rounded" />
          <div className="h-4 w-3/4 bg-bg-tertiary rounded" />
          <div className="h-4 w-full bg-bg-tertiary rounded" />
          <div className="h-4 w-5/6 bg-bg-tertiary rounded" />
        </div>
      </div>
    </div>
  );
}