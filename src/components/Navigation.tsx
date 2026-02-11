'use client';

import Link from 'next/link';
import { useAppStore } from "@/store/useAppStore";
import { Button } from "@/components/ui/button";

export default function Navigation() {

  const { isLoggedIn, logout } = useAppStore();

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-lg">
          MyBlog
        </Link>

        {isLoggedIn && (
          <Link href="/favourites" className="text-sm">
            Favourites
          </Link>
        )}
      </div>

      {isLoggedIn ? (
        <Button onClick={logout} variant="ghost">
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button>
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
}