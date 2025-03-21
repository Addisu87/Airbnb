import {
	Card,
	CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import BottomBar from "@/components/BottomBar"
import Counter from "@/components/Counter"
import { getDescription } from "@/actions/getDescription"
import Heading from "@/components/Heading"

interface DescriptionProps {
	params: { id: string }
}

export default function DescriptionRoute({
	params,
}: DescriptionProps) {
	return (
		<>
			<div className="w-3/5 mx-auto">
				<Heading title="Please describe your home as good as you can!" />

				<form action={getDescription}>
					<input
						type="hidden"
						name="homeId"
						value={params.id}
					/>
					<div className="mt-10 flex flex-col gap-y-5 mb-36">
						<div className="flex flex-col gap-y-2">
							<Label>Title</Label>
							<Input
								name="title"
								required
								placeholder="Short and simple description..."
							/>
						</div>

						<div className="flex flex-col gap-y-2">
							<Label>Description</Label>
							<Textarea
								name="description"
								required
								placeholder="Please describe your home..."
							/>
						</div>
						<div className="flex flex-col gap-y-2">
							<Label>Price</Label>
							<Input
								name="price"
								type="number"
								required
								placeholder="Price per night in USD"
								min={10}
							/>
						</div>

						<div className="flex flex-col gap-y-2">
							<Label>Image</Label>
							<Input
								name="image"
								type="file"
								required
							/>
						</div>

						<Card>
							<CardHeader className="flex flex-col gap-y-5">
								<div className="flex items-center justify-between">
									<div className="flex flex-col">
										<h3 className="underline font-medium">
											Guests
										</h3>
										<p className="text-muted-foreground text-sm">
											How many guests do you want?
										</p>
									</div>
									<Counter name="guest" />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex flex-col">
										<h3 className="underline font-medium">
											Rooms
										</h3>
										<p className="text-muted-foreground text-sm">
											How many rooms do you have?
										</p>
									</div>
									<Counter name="room" />
								</div>
								<div className="flex items-center justify-between">
									<div className="flex flex-col">
										<h3 className="underline font-medium">
											Bathrooms
										</h3>
										<p className="text-muted-foreground text-sm">
											How many bathrooms do you
											have?
										</p>
									</div>
									<Counter name="bathroom" />
								</div>
							</CardHeader>
						</Card>
					</div>
					<BottomBar />
				</form>
			</div>
		</>
	)
}
