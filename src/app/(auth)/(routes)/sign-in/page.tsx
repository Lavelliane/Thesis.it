import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='w-full h-screen flex text-white items-center justify-center'>
			<SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' afterSignInUrl='/dashboard' />
		</div>
	);
}
