"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main>
      <header>
        <h1>Protected Page</h1>
      </header>
      <section>
        {user ? (
          <p>You are longed in! This page is Protected</p>
        ) : (
          <p>You must be logged in to view this page.</p>
        )}
      </section>
    </main>
  );
}
