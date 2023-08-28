import { UserButton } from '@clerk/nextjs';
import HeroPage from '../../components/ui/heroPage';

export default function Home() {
	return (
		<div>
			<HeroPage />
			<UserButton afterSignOutUrl='/' />
			{/* Landing page ni diri with buttons to /sign-in and /sign-up */}
		</div>
	);
}
