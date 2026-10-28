import { useEffect, useState } from "react";
import { Bell, FileText, LayoutDashboard, Settings, ShoppingBag, Users } from "lucide-react";
import { AdminCustomers } from "./admin/AdminCustomers";
import { AdminDashboard } from "./admin/AdminDashboard";
import { AdminOrders } from "./admin/AdminOrders";
import { AdminReports } from "./admin/AdminReports";
import { AdminSettings } from "./admin/AdminSettings";

const SCREEN_MS = 2400;
const screens = [
  { title: "Live dashboard", Icon: LayoutDashboard, View: AdminDashboard },
  { title: "Orders", Icon: ShoppingBag, View: AdminOrders },
  { title: "Customers", Icon: Users, View: AdminCustomers },
  { title: "Reports", Icon: FileText, View: AdminReports },
  { title: "Settings", Icon: Settings, View: AdminSettings },
];

// Admin panel mockup: every sidebar item opens its own screen. Cycles on its own, and clicks jump.
export function BrowserAdmin() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setScreen((v) => (v + 1) % screens.length), SCREEN_MS);
    return () => clearTimeout(id);
  }, [screen]);

  const { title, View } = screens[screen];
  return (
    <div className="bw">
      <div className="bw__bar">
        <span className="bw__dots"><i /><i /><i /></span>
        <span className="bw__url">admin.yourproduct.com</span>
      </div>
      <div className="bw__body">
        <div className="bw__side">
          {screens.map(({ Icon, title: t }, i) => (
            <span key={t} title={t} className={i === screen ? "is-on" : ""} onClick={() => setScreen(i)}>
              <Icon size="1.9em" strokeWidth={1.8} />
            </span>
          ))}
        </div>
        <div className="bw__main">
          <div className="bw__head">
            <b key={title}>{title}</b>
            <span className="bw__live"><i />LIVE</span>
            <span className="bw__bell"><Bell size="1.7em" /><em /></span>
          </div>
          <View key={screen} />
        </div>
      </div>
    </div>
  );
}
