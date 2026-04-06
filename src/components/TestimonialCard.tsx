// src/components/TestimonialCard.tsx
import { Star } from '@phosphor-icons/react/dist/ssr';
import type { Testimonial } from '@/lib/content';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="border-t-2 border-red-mogo bg-zinc-50 p-6">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={14} weight="fill" className="text-red-mogo" />
        ))}
      </div>
      <p className="text-sm text-zinc-700 leading-relaxed mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="text-xs font-semibold text-zinc-900">{testimonial.name}</p>
      <p className="text-xs text-zinc-400">{testimonial.source}</p>
    </div>
  );
}
