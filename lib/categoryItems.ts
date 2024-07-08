import {
	Bird,
	Castle,
	Droplet,
	Fan,
	Fish,
	Gem,
	Landmark,
	LucideIcon,
	MountainSnow,
	Palmtree,
	Sailboat,
	Snowflake,
	Sun,
	Tent,
	TentTree,
	Warehouse,
} from 'lucide-react';

interface CategoryProps {
	id: number;
	label: string;
	icon: LucideIcon;
	description: string;
}

export const categoryItems: CategoryProps[] = [
	{
		id: 1,
		label: 'Beach',
		icon: Palmtree,
		description: 'This property is close to the beach!',
	},
	{
		id: 2,
		label: 'Windmills',
		icon: Fan,
		description: 'This property is has windmills!',
	},
	{
		id: 3,
		label: 'Modern',
		icon: Landmark,
		description: 'This property is modern!',
	},
	{
		id: 4,
		label: 'Countryside',
		icon: Bird,
		description: 'This property is in the countryside!',
	},
	{
		id: 5,
		label: 'Pools',
		icon: Droplet,
		description: 'This is property has a beautiful pool!',
	},
	{
		id: 6,
		label: 'Islands',
		icon: Sailboat,
		description: 'This property is on an island!',
	},
	{
		id: 7,
		label: 'Lake',
		icon: Fish,
		description: 'This property is near a lake!',
	},
	{
		id: 8,
		label: 'Skiing',
		icon: MountainSnow,
		description: 'This property has skiing activities!',
	},
	{
		id: 9,
		label: 'Castles',
		icon: Castle,
		description: 'This property is an ancient castle!',
	},
	{
		id: 10,
		label: 'Caves',
		icon: Tent,
		description: 'This property is in a spooky cave!',
	},
	{
		id: 11,
		label: 'Camping',
		icon: TentTree,
		description: 'This property offers camping activities!',
	},
	{
		id: 12,
		label: 'Arctic',
		icon: Snowflake,
		description: 'This property is in arctic environment!',
	},
	{
		id: 13,
		label: 'Desert',
		icon: Sun,
		description: 'This property is in the desert!',
	},
	{
		id: 14,
		label: 'Barns',
		icon: Warehouse,
		description: 'This property is in a barn!',
	},
	{
		id: 15,
		label: 'Lux',
		icon: Gem,
		description: 'This property is brand new and luxurious!',
	},
];
