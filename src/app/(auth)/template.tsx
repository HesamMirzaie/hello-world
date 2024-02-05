'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';
import { useState } from 'react';

const navLinks = [
  {
    name: 'Register',
    href: '/register',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Forget Password',
    href: '/forget-password',
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState('');
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={isActive ? 'font-bold mr-3' : 'text-blue-400 mr-4'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
