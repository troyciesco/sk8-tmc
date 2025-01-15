import { SVGProps } from "react"

export function Logo(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 411 211"
			{...props}>
			<title>Suburbia Skate Logo</title>
			<path
				fill="currentColor"
				d="M55 120c-2 3 0 8-2 11-2 4-6 6-9 8-2 2-3 4-6 5-5 1-11-1-16-1-4 1-9-1-12-4-1-4-3-6-5-9l-5-16c0-3 1-9 5-10h4c22-2 10 22 20 27 3 1 6 0 8-3 4-1 6-4 5-8-1-7-2-14-9-16-4 0-8-3-12-5-4-3-9-3-13-6-2-2 0-6 0-9 1-6 6-11 13-10 3-3 7-3 11-4 4 0 10-3 13 0 3 1 6 5 8 8 1 5-1 10-7 10-7 0-9-6-18-5-6-1-8 4-2 6 4 5 12 5 18 8 3 2 5 7 8 10s2 8 3 13m50 1c0 6-1 13-3 19 0 5-3 9-8 12-4 3-15 4-20 2-5-5-14-8-14-17l-1-8c-1-4 1-7 1-11-2-10 5-21 1-31-3-7 11-5 13-1 1 8-2 15-3 23l1 7c-2 5 0 12 1 18 2 2 7 3 10 1l1-9c0-2 2-4 1-6v-14c1-4-1-8 1-12 4-3 14-9 18-2 3 9-1 19 1 29m57 17-1 12c-2 1-4 3-2 6-1 3-8 6-11 8-3 1-8-1-11 1-5 2-13-1-18-2a9 9 0 0 1-6 0c-1-2-4-2-4-4l-1-1-1-4c-1-8 6-6 7-11l-2-12c3-7 2-13 1-19l1-12c-1-2-2-5-1-7 3-3 7-2 11-2 5-2 11-2 16-2 4 1 7-1 10 1 4 3 9 6 11 12 1 2-1 4-1 7 1 6-6 10-11 10l3 2 6 5c1 5 4 7 4 12m-17-32c2-9-20-9-21-1 1 17-3 10 12 10 6-2 9-2 9-9m-4 22c-2-1-2-3-4-3l-12 1v14c0 2-1 5 1 6 15 3 20-4 15-18m67-9c1 6 2 12 0 17 0 7-4 13-10 15-13 1-15 5-27-4-5-3-3-11-6-15v-7c1-4 0-7-1-10l3-17c0-3 2-7 1-10 1-6 13-2 10 8 0 4-2 9-1 13-1 7 0 13 1 19l1 7c3 2 7 3 11 1 3-3 0-9 1-14-1-6-4-6-3-13-1-6-4-17 5-15 15-4 12 17 15 25m60-19c-5 13-17 1-5 19-2 5 4 10 2 15-2 3-4 5-7 5-3 3-8 5-11 2-2-3-1-6-3-8l-1-10c-4-3-2-11-6-12-2 0-4-1-4 1l-1 10c-3 4-2 9-1 13 2 5-5 7-9 6-2 0-5 1-6-2-3-9 0-7 1-14l-1-9c1-4 2-7 0-11 1-3 1-6-1-9v-8c0-2-2-3-3-4-1-8 8-10 14-10h18c8-2 18-5 23 4v7c1 5 3 10 1 15m-11-7c-2-2-2-6-3-8-4-5-10 1-15 0-14 5-14-2-9 16 7-2 9 1 16-3 5 0 10 2 11-5m69 20-2 9c1 2 0 4-2 6l-1 3c-1 3-5 3-7 5-3 2-7 0-10 1-8 1-18 2-26-1h-1l-2-5c-1-5 0-6 3-9v-18c2-6 1-11-1-17V74c0-3-5-6-2-9 4-3 10-2 14-2 6-2 12-2 17-1 9-2 11 0 18 5 4 5 6 11 3 17-2 7-4 8-12 9l4 3 6 6c1 4 3 7 1 12zm-13-34c1-10-23-10-24-2 3 20-3 12 14 11 7-1 9-2 10-9m-4 24-5-2h-14l1 15c0 2-2 5 0 7 6 2 13 0 18-2 5-4 4-13 0-18m44-12-1 10c-3 4-3 8-3 13-2 3-1 4 0 7-1 5-1 12-5 15-6 2-6-3-7-7-1-2-3-3-2-6l1-13V99c0-3-4-4-1-8 0-4-2-7 0-10 2-4 5-3 7-4 3-1 6 1 9 2 2 4 3 8 2 12m55 38v4l1 11c0 2 2 5 1 8l-2 3-3 4c-4 5-9-1-10-6-4-5-2-12-1-17-2-3-3-7-3-10-1-2-4 0-5 1-4 1-8-1-13-1-6-1-3 7-5 10-4 4-2 13-8 14-3 0-4-3-5-5-3-2-3-5-2-8 0-1 2-2 1-3 1-5 5-9 5-15-1-3 0-6 3-9 0-3-1-4 2-8 1-5-1-7 3-11-1-5 3-8 3-12 2-8 12-5 17-4 4 0 7-2 10 0 6 3 3 11 6 16 3 4 1 9 2 13l1 5v6c-2 7-3 9 2 14m-20-14c1-2-1-5-1-7l-1-4-3-6c-1-1 0-4-2-5l-8 24zm-124 66c-1 9-1 8-8 14-4 4-10 1-15 0-5-2-2-4-6-7-1-1 1-2-1-3l-1-5c0-1 0-7 2-5 2 0 0-3 4-1 4 1 2 7 5 9 1 2 3 7 7 5l4-3c1-3-1-10-4-11-5-2-11-3-15-7-4-5 0-15 7-14 2-1 14-5 15-1l2 2 2 3c1 3-1 10-5 8-3-2-3-7-7-6-6 0-9 2-3 6 3 3 3 2 7 3 7 4 10 5 10 13m41-23c-1 5-13 4-10 10l2 4 6 11c-1 4-7 5-10 6-4 0-4-5-5-7l-3-8c0-2-1-5-3-3-2 1-2 2-2 4 0 5 3 12 0 16-4 2-11 3-12-3-1-5 2-9 2-14-1-4 0-8 1-11v-8l2-4c0-4 4-4 7-3s-4 20 1 16l18-9c4-3 7-2 6 3m33 26c0 4-2 7-3 10-3 1-6-1-6-4 0-2 1-6-1-8h-2c-2 1-4 0-6-1-4-1-5 0-5 4 0 2-1 2-2 3l-3 6c-4 3-8-6-5-8l1-2c2-3 4-7 4-11 1-2 3-3 2-5l2-2 1-6c2-1 1-3 2-4l3-5c3-3 7-2 10 0h6c4 3 1 8 3 11v10l-1 6zm-10-9-1-4 1-3-2-3-1-4c-2 5-5 9-6 14zm49-10c1 12-11 4-18 6l-1 23c1 3-2 6-6 5l-3-2-2-7c-1-4 2-9 2-13 3-12-4-2-6-11-1-1 0-2 1-3 0-5 4-5 7-3 3 0 2-6 7-3 1 5 6 3 9 4 3 3 9-1 10 4m30 39-2 4h-6l-4 2-11-1-6-3c-2 0-3-2-3-4-1-1-3-2-2-4l3-1h2l3-21c1-1 0-2-1-2-4-5 4-8 8-7l9 2c2 0 5-1 6 1 3 4 10 3 6 9-6 4-14-1-20-1-3 5 0 6 5 7h5l1 3c0 5-4 4-8 3l-2 1c-1 2-2 4 0 5 5 4 22-4 17 7M122 74c3 1 6 0 9-2l1-1a37 37 0 0 0 4-1c2-2 6-3 8-7a21 21 0 0 0 3-4c-1-4 1-7 1-10v-1a27 27 0 0 0-1-4c0-4-2-8-6-10h-1l-3-2-6-1h-6l-6-1a40 40 0 0 1-3-1l-8-3H97a26 26 0 0 1-3 0l-9-4c-3-1-7-1-10-3h-1l-6-4-7-2a76 76 0 0 1-2-1c-2 1-4 0-5-1l-5-2-1-1-4-1-2-1-1-1-1-1c-4 0-7-3-12-3h-1c-3 0-5 1-7 4l-1 1-3 2-1 1a20 20 0 0 0-4 8v9a8 8 0 0 0 0 4c1 4 4 6 6 9l1 1 2 2 1 1 3 3h1c4 1 5 5 9 5h1l3 2h3v3c-2 2 0 3 1 4l1 1 1 1c4 3 8 2 12-2a7 7 0 0 0 1-2l2 1c3 2 7 2 11 3l1 1 6 2h1c4 0 8 2 11 3l1 1h2v2c-1 2 0 3 1 4v1c0 2 1 2 3 3h7l5-5h1l9 1h1l2-1zm-8-38c2 1 1 3 0 4l-2-1c0-1-1-3 1-3zm-4 13 1 2-1 2c-1 0-2 0-2-3l1-1zm-7-15 1 3c-2 2-3 1-4-1l2-2zm-4 12 1 3c-2 2-3 1-3-1zM61 22c1 0 2 0 1 1 0 3-2 1-3 1 1 0-1-3 1-3zm-3 12s3 1 0 3l-3-1c-1-2 1-2 2-3zm-7-16c2 1 2 3 1 3s-3 1-3-1l1-2zm-4 13c3 0 2 2 2 3h-4l1-3zm-8 18h-2a33 33 0 0 1-4-2c-1 1-2 0-3-1v-1l-4-2a37 37 0 0 1-3-3l-4-6-1-2-2-5a56 56 0 0 1-2-7v-1l4-8-1 8v1c0 4 3 7 3 10a15 15 0 0 0 1 2l3 4a76 76 0 0 0 3 2v1c3 1 5 1 6 4h1a37 37 0 0 0 4 2l1 1 12 3 9 3h1c4 2 7 4 10 3l1 1 8 2h1a39 39 0 0 0 12 4c6 1 12 2 17 5l2 1h10c1-2 3 0 4-1l1-1c8-2 16-8 17-16a13 13 0 0 1 0 5c-1 5-5 9-10 12l-3 1-2 1c-3 1-6 3-10 2h-1l-8-1h-2c-5-1-8-4-13-4l-3-1h-2l-1-1-8-2h-1v-1l-10-2-1-1h-1c-2 1-4-2-6-2h-2l-10-3-1-1a45 45 0 0 1-10-3m9 9-1-2v-1l1 1h3v1h-1c0 2-1 0-2 1m51 15c-1 0-2 0-1-1a2 2 0 0 1 0-2 177 177 0 0 1 4 2l-2 1z"></path>
		</svg>
	)
}
