// src/components/ServiceCard.tsx
import * as Icons from '@phosphor-icons/react/dist/ssr';
import type { Service } from '@/lib/content';

type IconName = keyof typeof Icons;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as IconName] ?? Icons.Wrench) as React.ElementType;

  return (
    <div className="border-l-2 border-zinc-200 hover:border-red-mogo pl-5 py-2 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={20} weight="bold" className="text-red-mogo shrink-0" />
        <h3 className="font-semibold text-sm text-zinc-900">{service.title}</h3>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed">{service.description}</p>
    </div>
  );
}
