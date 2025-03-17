import SelectCategory from "@/components/SelectCategory"
import BottomBar from "@/components/BottomBar"
import { getCategory } from "@/actions/getCategory"
import Heading from "@/components/Heading"

interface BookingProps {
	params: { id: string }
}

export default function BookingRoute({
	params,
}: BookingProps) {
	return (
		<>
			<div className="w-3/5 mx-auto mb-36">
				<Heading title="Which of these best describe your home?" />

				<form action={getCategory}>
					<input
						type="hidden"
						name="homeId"
						value={params.id}
					/>
					<SelectCategory />

					<BottomBar />
				</form>
			</div>
		</>
	)
}
