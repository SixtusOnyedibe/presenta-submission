import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horizon login',
  description: 'Login to use horizon',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
