import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import LogoutButton from "./LogoutButton";
import Siderbar from "@/components/dashboard/Sidebar";
import Noise from "@/components/noise";

export default async function Dashboard() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#17171F]">
      <Noise
        patternSize={100}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />

      <div className="absolute inset-0">
        <Siderbar />
      </div>
    </div>
  );
}
