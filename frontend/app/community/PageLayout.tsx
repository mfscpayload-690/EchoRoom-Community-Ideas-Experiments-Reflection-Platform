import { Navbar } from "./Navbar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors">

      <Navbar />

      {/* Content container aligned with navbar */}
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </div>
      </main>

    </div>
  );
};
