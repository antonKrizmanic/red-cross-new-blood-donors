import {
    BellRing,
    Calendar,
    CheckCircle2,
    Clock,
    Coffee,
    Droplets,
    Gift,
    Heart,
    type LucideIcon,
    Shield,
    UserCheck,
} from 'lucide-react';
import type { IconName } from '@/content/page-content';

const icons: Record<IconName, LucideIcon> = {
    heart: Heart,
    clock: Clock,
    shield: Shield,
    gift: Gift,
    bell: BellRing,
    calendar: Calendar,
    check: CheckCircle2,
    'user-check': UserCheck,
    droplets: Droplets,
    coffee: Coffee,
};

type EditorialIconProps = {
    name: IconName;
    className?: string;
};

export function EditorialIcon({ name, className }: EditorialIconProps) {
    const Icon = icons[name];
    return <Icon aria-hidden="true" className={className} />;
}
