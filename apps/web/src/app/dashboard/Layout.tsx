'use client';
import { Footer } from '@/components/Footer';
import SideBar from './SideBar';

type LayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<LayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {' '}
      <body className="flex flex-row">
        <div className="flex row-span-1">
          <SideBar />
        </div>
        {children}
        <Footer />
      </body>
    </>
  );
};

export default DashboardLayout;
