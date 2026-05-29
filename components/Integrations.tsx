import { withBase } from "@/lib/base";

type Tool = { name: string; icon?: string };

const tools: Tool[] = [
  { name: "n8n", icon: "/logos/n8n.svg" },
  { name: "Supabase", icon: "/logos/supabase.svg" },
  { name: "GoHighLevel" },
  { name: "Meta Ads", icon: "/logos/meta.svg" },
  { name: "Google Ads", icon: "/logos/googleads.svg" },
  { name: "Google Cloud", icon: "/logos/googlecloud.svg" },
  { name: "Make", icon: "/logos/make.svg" },
  { name: "OpenAI" },
  { name: "Notion", icon: "/logos/notion.svg" },
  { name: "WhatsApp", icon: "/logos/whatsapp.svg" },
  { name: "Google Sheets", icon: "/logos/googlesheets.svg" },
  { name: "Gmail", icon: "/logos/gmail.svg" },
];

function Item({ t }: { t: Tool }) {
  return (
    <span className="mq-item">
      {t.icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={withBase(t.icon)} alt="" aria-hidden="true" />
      )}
      {t.name}
    </span>
  );
}

export default function Integrations() {
  return (
    <div className="integ">
      <div className="integ-head">
        <span className="integ-lbl">⎯ EL STACK QUE USAMOS</span>
        <span className="integ-sub">CONECTA · INTEGRA · AUTOMATIZA</span>
      </div>
      <div className="mq">
        <div className="mq-track">
          {tools.map((t, i) => (
            <Item key={`a${i}`} t={t} />
          ))}
          {tools.map((t, i) => (
            <Item key={`b${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
