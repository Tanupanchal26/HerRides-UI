import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "HerRides - Super Admin",
  description: "HerRides Super Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Sidebar />
        <main className="ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}
