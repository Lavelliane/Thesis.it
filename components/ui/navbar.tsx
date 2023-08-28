'use client';
import React, { useState } from 'react';
import { UserButton, SignOutButton, useUser, ClerkLoaded } from '@clerk/nextjs';
import Image from 'next/image';
import { DiscordLogoIcon, LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { TypeAnimation } from 'react-type-animation';

export default function Navbar() {
	const { user } = useUser();
	const [show, setShow] = useState(false);

	return (
		<nav className=' 2xl:mx-auto sm:px-7 px-4 w-full py-2  h-fit backdrop-blur-2xl bg-opacity-80 absolute z-10 shadow-md items-center justify-center'>
			{/* For large and Medium-sized Screen */}
			<div className='flex justify-between px-2 items-center'>
				<div className='hidden sm:flex flex-row items-center space-x-6'>
					<DiscordLogoIcon className='text-white hover:scale-105 hover:-translate-y-1 transition-all w-6 h-6' />
					<LinkedInLogoIcon className='text-white hover:scale-105 hover:-translate-y-1 transition-all w-6 h-6' />
					<GitHubLogoIcon className='text-white hover:scale-105 hover:-translate-y-1 transition-all w-6 h-6' />
				</div>
				<div className=' flex items-center mr-12 h-full'>
					<Image src={'/assets/sprites/logo-white.png'} width={28} height={30} alt='logo' />
					<div className='hidden sm:block'>
						{' '}
						<TypeAnimation
							sequence={['hesis.it', 7000, '', 200, 'his is it', 7000, '', 200]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
							style={{ fontWeight: 'bold', fontSize: '30px', lineHeight: '36px' }}
						/>
					</div>
				</div>
				<div className='hidden sm:flex flex-row space-x-4'>
					<ClerkLoaded>
						<UserButton afterSignOutUrl='/' />
					</ClerkLoaded>
				</div>
				{/* Burger Icon */}
				<div
					id='bgIcon'
					onClick={() => setShow(!show)}
					className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
				>
					<svg
						className={`${show ? 'hidden' : ''}`}
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							className=' transform duration-150'
							d='M4 6H20'
							stroke='#fff'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path d='M4 12H20' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
						<path
							className=' transform duration-150'
							d='M4 18H20'
							stroke='#fff'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<svg
						className={`${show ? 'block' : 'hidden'}`}
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M18 6L6 18' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M6 6L18 18' stroke='#fff' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</div>
			</div>
			{/* Mobile and small-screen devices (toggle Menu) */}
			<div
				id='MobileNavigation'
				className={`${show ? 'block' : 'hidden'} sm:hidden mt-4 h-full w-full flex items-center`}
			>
				<div className='flex flex-col gap-8 h-full w-full items-center justify-center'>
					<div className='flex flex-row gap-6 w-full justify-center items-center self-center'>
						<DiscordLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-6 h-6' />
						<LinkedInLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-6 h-6' />
						<GitHubLogoIcon className='hover:scale-105 hover:-translate-y-1 transition-transform w-6 h-6' />
					</div>
					<div className='flex gap-2 justify-center items-center font-semibold'>
						<Image
							className='rounded-full'
							src={user?.imageUrl || '/assets/sprites/user-avatar.png'}
							width={30}
							height={30}
							alt='profile image'
						></Image>
						{user?.fullName}
					</div>
					<div className='font-semibold mb-10'>
						<SignOutButton />
					</div>
				</div>
			</div>
		</nav>
	);
}
