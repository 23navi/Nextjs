import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchJson } from "../lib/api";
import { useQuery } from "react-query";

function NavBar() {
  // const [user, setUser] = useState();
  const user = useQuery("user", async () => {
    try {
      return await fetchJson("/api/user");
    } catch (error) {
      return undefined;
    }
  }).data;

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const user = await fetchJson("/api/user");
  //       setUser(user);
  //     } catch (err) {
  //       // not signed in
  //        setUser(undefined);
  //     }
  //   })();
  // }, []);

  // const handleSignOut = async () => {
  //   await fetchJson("/api/logout");
  //   setUser(undefined);
  // };

  console.log("[NavBar] user:", user);
  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1" />
        {user ? (
          <>
            <li>{user.name}</li>
            <li>{/* <button onClick={handleSignOut}>Sign Out</button> */}</li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
