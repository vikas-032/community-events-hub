"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthProvider";

const nav = [
  { href: "/events", label: "Events" },
  { href: "/food", label: "Food" },
  { href: "/about", label: "About" },
  { href: "/profile", label: "Profile" },
];

export function Header() {
  const { user, loading, firebaseReady, signInWithGoogle, signOutUser } = useAuth();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Jaipur Events Hub
          </span>
          <span className="text-xs text-amber-500/90">Heritage × Tech</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-400 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {!firebaseReady ? (
            <span className="hidden text-xs text-amber-600/80 sm:inline">Demo</span>
          ) : loading ? (
            <span className="text-sm text-stone-600">…</span>
          ) : user ? (
            <>
              <span className="hidden max-w-[120px] truncate text-sm text-stone-400 sm:inline">
                {user.displayName ?? user.email}
              </span>
              <button
                type="button"
                onClick={() => signOutUser()}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-stone-300 transition hover:border-amber-500/30 hover:text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => signInWithGoogle()}
              className="btn-primary !py-2 !text-sm"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
