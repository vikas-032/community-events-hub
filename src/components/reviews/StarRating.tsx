"use client";

export function StarRating({
  value,
  onChange,
  readonly = false,
  size = "md",
}: {
  value: number;
  onChange?: (n: number) => void;
  readonly?: boolean;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "sm" ? "text-lg" : "text-2xl";

  return (
    <div className={`flex gap-1 ${sizeClass}`} role={readonly ? "img" : "group"} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => onChange?.(star)}
          className={`transition ${
            readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
          } ${star <= value ? "text-amber-400" : "text-stone-600"}`}
          aria-label={readonly ? undefined : `Rate ${star} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
}
