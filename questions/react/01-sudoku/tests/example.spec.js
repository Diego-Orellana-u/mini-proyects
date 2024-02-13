// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sudoku Solver/);
});

test('Shows heading', async({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('heading', { name: 'Sudoku Solver'})
  await expect(text).toBeVisible()

})

test('Shows Board', async({ page }) => {
  await page.goto(LOCALHOST_URL)

  const board = await page.getBy
})
