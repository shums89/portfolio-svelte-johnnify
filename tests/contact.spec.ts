import { test, expect } from '@playwright/test'

test('has links to all my socials', async ({ page }) => {
	await page.goto('/contact')
	await expect(page.getByTestId('hydrated')).toBeVisible()

	// We are only concerned of links in the 'main' section
	// not in the header or footer for example
	const mainElement = page.getByRole('main')
	const youTubeLink = mainElement.getByRole('link', { name: 'YouTube' })
	await expect(youTubeLink).toBeVisible()
	await expect(youTubeLink).toHaveAttribute('href', 'https://www.youtube.com/')

	const discordLink = mainElement.getByRole('link', { name: 'Discord' })
	await expect(discordLink).toBeVisible()
	await expect(discordLink).toHaveAttribute('href', 'https://discord.gg/')

	const instagramLink = mainElement.getByRole('link', { name: 'Instagram' })
	await expect(instagramLink).toBeVisible()
	await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/')
})
