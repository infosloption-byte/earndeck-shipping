import {
  Container,
  FileCheck,
  Fuel,
  Layers,
  LifeBuoy,
  Package,
  Scale,
  Ship,
  ShieldCheck,
} from 'lucide-react';
import type { IconName } from '@/lib/site';

const icons = {
  scale: Scale,
  fuel: Fuel,
  package: Package,
  container: Container,
  filecheck: FileCheck,
  ship: Ship,
  shield: ShieldCheck,
  lifebuoy: LifeBuoy,
  layers: Layers,
} as const;

export function ServiceIcon({ name, size = 26 }: { name: IconName; size?: number }) {
  const Icon = icons[name];
  return <Icon size={size} strokeWidth={1.6} aria-hidden="true" />;
}
