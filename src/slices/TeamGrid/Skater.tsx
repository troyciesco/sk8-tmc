import { ButtonLink } from "@/components/ButtonLink"
import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SkaterScribble } from "./SkaterScribble"
import clsx from "clsx"

type Props = {
	skater: Content.SkaterDocument
	index: number
}
export function Skater({ skater, index }: Props) {
	const colors = [
		"text-brand-blue",
		"text-brand-lime",
		"text-brand-orange",
		"text-brand-pink",
		"text-brand-purple"
	]

	const scribbleColor = colors[index]

	return (
		<div className="skater group relative flex flex-col items-center gap-4">
			<div className="stack-layout overflow-hidden">
				<PrismicNextImage
					field={skater.data.photo_background}
					width={500}
					imgixParams={{ q: 20 }}
					alt=""
					className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
				/>
				<SkaterScribble className={clsx("relative", scribbleColor)} />
				<PrismicNextImage
					field={skater.data.photo_foreground}
					width={500}
					alt=""
					className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
				/>
			</div>
		</div>
	)
}
