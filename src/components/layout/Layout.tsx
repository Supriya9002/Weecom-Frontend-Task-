interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
};
