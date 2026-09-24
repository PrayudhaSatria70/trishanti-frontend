import { redirect } from "next/navigation";

/**
 * Root Page Handler
 * Redirects the root path `/` directly to the default locale `/en`.
 * Prevents any 404 when navigating to http://localhost:3000/.
 */
export default function RootPage() {
  redirect("/en");
}
