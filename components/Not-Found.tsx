import { File } from 'lucide-react';
import Heading from './Heading';

interface NotItemFoundProps {
	title: string;
	subtitle: string;
}

const NotFound: React.FC<NotItemFoundProps> = ({
	title,
	subtitle,
}) => {
	return (
		<div className='flex flex-col min-h-[350px] items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50 mt-10'>
			<div className='flex h-20 w-20 items-center justify-center rounded-full bg-primary/10'>
				<File className='h-10 w-10 text-primary' />
			</div>
			<div className='m-6'>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<p className='mt-2 text-center text-sm leading-6 text-muted-foreground'>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

export default NotFound;
