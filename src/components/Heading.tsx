import clsx from "clsx"

type HeadingProps = {
	children: React.ReactNode
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
	size?: "xl" | "lg" | "md" | "sm" | "xs"
	className?: string
}

export function Heading({
	children,
	as: Component = "h1",
	size = "lg",
	className
}: HeadingProps) {
	return (
		<Component
			className={clsx(
				"font-sans uppercase",
				size === "xl" && "~text-4xl/8xl",
				size === "lg" && "~text-4xl/7xl",
				size === "md" && "~text-3xl/5xl",
				size === "sm" && "~text-2xl/4xl",
				size === "xs" && "~text-lg/xl",
				className
			)}>
			{children}
		</Component>
	)
}
